
-- CREACIÓN DE LA BASE DE DATOS
CREATE DATABASE DeliveryDB;
GO

USE DeliveryDB;
GO

-- TABLA: Roles
CREATE TABLE Roles (
    IdRol INT IDENTITY(1,1) PRIMARY KEY,
    NombreRol NVARCHAR(50) NOT NULL
);
GO

-- TABLA: Estados de Pedido
CREATE TABLE EstadosPedido (
    IdEstado INT IDENTITY(1,1) PRIMARY KEY,
    NombreEstado NVARCHAR(50) NOT NULL
);
GO

-- TABLA: Métodos de Pago
CREATE TABLE MetodosPago (
    IdMetodoPago INT IDENTITY(1,1) PRIMARY KEY,
    Nombre NVARCHAR(50) NOT NULL
);
GO

-- TABLA: Usuarios
CREATE TABLE Usuarios (
    IdUsuario INT IDENTITY(1,1) PRIMARY KEY,
    Nombre NVARCHAR(100) NOT NULL,
    Apellido NVARCHAR(100) NOT NULL,
    Correo NVARCHAR(150) NOT NULL UNIQUE,
    Contraseña NVARCHAR(255) NOT NULL,
    Telefono NVARCHAR(20),
    IdRol INT NOT NULL,
    Activo BIT DEFAULT 1,
    Latitud DECIMAL(9,6) NULL,
    Longitud DECIMAL(9,6) NULL,
    CONSTRAINT FK_Usuarios_Roles FOREIGN KEY (IdRol) REFERENCES Roles(IdRol)
);
GO

-- TABLA: Direcciones de Usuario
CREATE TABLE DireccionesUsuario (
    IdDireccion INT IDENTITY(1,1) PRIMARY KEY,
    IdUsuario INT NOT NULL,
    Alias NVARCHAR(50) NOT NULL,
    Direccion NVARCHAR(255) NOT NULL,
    Referencia NVARCHAR(255),
    Latitud DECIMAL(9,6) NULL,
    Longitud DECIMAL(9,6) NULL,
    CONSTRAINT FK_DireccionesUsuario_Usuarios FOREIGN KEY (IdUsuario) REFERENCES Usuarios(IdUsuario)
);
GO

-- TABLA: Productos
CREATE TABLE Productos (
    IdProducto INT IDENTITY(1,1) PRIMARY KEY,
    NombreProducto NVARCHAR(100) NOT NULL,
    Descripcion NVARCHAR(255),
    Precio DECIMAL(10,2) NOT NULL,
    Stock INT NOT NULL,
    Activo BIT DEFAULT 1
);
GO

USE DeliveryDB;
GO

-- TABLA: Movimientos de Inventario
CREATE TABLE MovimientosInventario (
    IdMovimiento INT IDENTITY(1,1) PRIMARY KEY,
    IdProducto INT NOT NULL,
    FechaMovimiento DATETIME DEFAULT GETDATE(),
    TipoMovimiento NVARCHAR(20) NOT NULL,
    Cantidad INT NOT NULL,
    StockPrevio INT NOT NULL,
    StockNuevo INT NOT NULL,
    IdUsuario INT NOT NULL,
    CONSTRAINT FK_MovimientosInventario_Producto FOREIGN KEY (IdProducto) REFERENCES Productos(IdProducto),
    CONSTRAINT FK_MovimientosInventario_Usuario FOREIGN KEY (IdUsuario) REFERENCES Usuarios(IdUsuario)
);
GO

-- TABLA: Pedidos
CREATE TABLE Pedidos (
    IdPedido INT IDENTITY(1,1) PRIMARY KEY,
    IdCliente INT NOT NULL,
    FechaPedido DATETIME DEFAULT GETDATE(),
    EstadoActual INT NOT NULL,
    Total DECIMAL(10,2),
    DireccionEntrega NVARCHAR(255),
    IdRepartidor INT NULL,
    CONSTRAINT FK_Pedidos_Clientes FOREIGN KEY (IdCliente) REFERENCES Usuarios(IdUsuario),
    CONSTRAINT FK_Pedidos_Repartidores FOREIGN KEY (IdRepartidor) REFERENCES Usuarios(IdUsuario),
    CONSTRAINT FK_Pedidos_Estado FOREIGN KEY (EstadoActual) REFERENCES EstadosPedido(IdEstado)
);
GO

-- TABLA: Historial de Estados de Pedido
CREATE TABLE HistorialEstadoPedido (
    IdHistorial INT IDENTITY(1,1) PRIMARY KEY,
    IdPedido INT NOT NULL,
    EstadoAnterior INT NULL,
    EstadoNuevo INT NOT NULL,
    FechaCambio DATETIME DEFAULT GETDATE(),
    IdUsuario INT NOT NULL,
    CONSTRAINT FK_HistorialEstadoPedido_Pedido FOREIGN KEY (IdPedido) REFERENCES Pedidos(IdPedido),
    CONSTRAINT FK_HistorialEstadoPedido_EstadoNuevo FOREIGN KEY (EstadoNuevo) REFERENCES EstadosPedido(IdEstado),
    CONSTRAINT FK_HistorialEstadoPedido_EstadoAnterior FOREIGN KEY (EstadoAnterior) REFERENCES EstadosPedido(IdEstado),
    CONSTRAINT FK_HistorialEstadoPedido_Usuario FOREIGN KEY (IdUsuario) REFERENCES Usuarios(IdUsuario)
);
GO

-- TABLA: Detalle de Pedido
CREATE TABLE DetallePedido (
    IdDetallePedido INT IDENTITY(1,1) PRIMARY KEY,
    IdPedido INT NOT NULL,
    IdProducto INT NOT NULL,
    Cantidad INT NOT NULL,
    PrecioUnitario DECIMAL(10,2) NOT NULL,
    Subtotal DECIMAL(10,2) NOT NULL,
    CONSTRAINT FK_DetallePedido_Pedido FOREIGN KEY (IdPedido) REFERENCES Pedidos(IdPedido),
    CONSTRAINT FK_DetallePedido_Producto FOREIGN KEY (IdProducto) REFERENCES Productos(IdProducto)
);
GO

-- TABLA: Pagos
CREATE TABLE Pagos (
    IdPago INT IDENTITY(1,1) PRIMARY KEY,
    IdPedido INT NOT NULL,
    IdMetodoPago INT NOT NULL,
    Monto DECIMAL(10,2) NOT NULL,
    FechaPago DATETIME DEFAULT GETDATE(),
    EstadoPago NVARCHAR(50) NOT NULL,
    CONSTRAINT FK_Pagos_Pedido FOREIGN KEY (IdPedido) REFERENCES Pedidos(IdPedido),
    CONSTRAINT FK_Pagos_Metodo FOREIGN KEY (IdMetodoPago) REFERENCES MetodosPago(IdMetodoPago)
);
GO

-- TABLA: Auditoría de acciones
CREATE TABLE Auditoria (
    IdAuditoria INT IDENTITY(1,1) PRIMARY KEY,
    IdUsuario INT NOT NULL,
    Fecha DATETIME DEFAULT GETDATE(),
    Accion NVARCHAR(255) NOT NULL,
    TablaAfectada NVARCHAR(50) NOT NULL,
    RegistroId INT NULL,
    CONSTRAINT FK_Auditoria_Usuario FOREIGN KEY (IdUsuario) REFERENCES Usuarios(IdUsuario)
);
GO

-- TABLA: Log de accesos
CREATE TABLE LogAccesos (
    IdLog INT IDENTITY(1,1) PRIMARY KEY,
    IdUsuario INT NOT NULL,
    FechaHora DATETIME DEFAULT GETDATE(),
    Accion NVARCHAR(50) NOT NULL,
    CONSTRAINT FK_LogAccesos_Usuario FOREIGN KEY (IdUsuario) REFERENCES Usuarios(IdUsuario)
);
GO

USE DeliveryDB;
GO

-- INSERTS EN ROLES
INSERT INTO Roles (NombreRol) VALUES
('Administrador'),
('Cliente'),
('Repartidor');
GO

-- INSERTS EN EstadosPedido
INSERT INTO EstadosPedido (NombreEstado) VALUES
('Pendiente'),
('En preparación'),
('En camino'),
('Entregado'),
('Cancelado');
GO

-- INSERTS EN MetodosPago
INSERT INTO MetodosPago (Nombre) VALUES
('Efectivo'),
('Tarjeta'),
('Yape'),
('Plin');
GO

-- INSERTS EN Usuarios
INSERT INTO Usuarios (Nombre, Apellido, Correo, Contraseña, Telefono, IdRol, Latitud, Longitud)
VALUES
('Admin', 'Sistema', 'admin@delivery.com', 'admin123', '999999999', 1, NULL, NULL),
('Juan', 'Perez', 'juan@correo.com', '12345', '987654321', 2, -12.0464, -77.0428),
('Pedro', 'Gomez', 'pedro@correo.com', '12345', '912345678', 3, -12.0485, -77.0402);
GO

-- INSERTS EN DireccionesUsuario
INSERT INTO DireccionesUsuario (IdUsuario, Alias, Direccion, Referencia, Latitud, Longitud)
VALUES
(2, 'Casa', 'Av. Perú 123', 'Frente al parque', -12.0464, -77.0428),
(2, 'Oficina', 'Jr. Los Olivos 456', '3er piso', -12.0500, -77.0380);
GO

-- INSERTS EN Productos
INSERT INTO Productos (NombreProducto, Descripcion, Precio, Stock, Activo)
VALUES
('Pizza Pepperoni', 'Pizza grande con pepperoni', 29.90, 20, 1),
('Hamburguesa Doble', 'Hamburguesa doble carne con queso', 18.50, 15, 1),
('Inka Kola 1L', 'Bebida gaseosa', 5.00, 50, 1);
GO

-- INSERTS EN Pedidos
INSERT INTO Pedidos (IdCliente, EstadoActual, Total, DireccionEntrega, IdRepartidor)
VALUES
(2, 1, 53.40, 'Av. Perú 123', 3);
GO

-- INSERTS EN HistorialEstadoPedido
INSERT INTO HistorialEstadoPedido (IdPedido, EstadoAnterior, EstadoNuevo, IdUsuario)
VALUES
(1, NULL, 1, 2);
GO

-- INSERTS EN DetallePedido
INSERT INTO DetallePedido (IdPedido, IdProducto, Cantidad, PrecioUnitario, Subtotal)
VALUES
(1, 1, 1, 29.90, 29.90),
(1, 2, 1, 18.50, 18.50),
(1, 3, 1, 5.00, 5.00);
GO

-- INSERTS EN Pagos
INSERT INTO Pagos (IdPedido, IdMetodoPago, Monto, EstadoPago)
VALUES
(1, 1, 53.40, 'Pagado');
GO

-- INSERTS EN MovimientosInventario
INSERT INTO MovimientosInventario (IdProducto, TipoMovimiento, Cantidad, StockPrevio, StockNuevo, IdUsuario)
VALUES
(1, 'Salida', 1, 20, 19, 2),
(2, 'Salida', 1, 15, 14, 2),
(3, 'Salida', 1, 50, 49, 2);
GO

-- INSERTS EN Auditoria
INSERT INTO Auditoria (IdUsuario, Accion, TablaAfectada, RegistroId)
VALUES
(2, 'Creación de Pedido', 'Pedidos', 1);
GO

-- INSERTS EN LogAccesos
INSERT INTO LogAccesos (IdUsuario, Accion)
VALUES
(2, 'Login'),
(3, 'Login');
GO
