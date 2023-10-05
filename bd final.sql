CREATE DATABASE casadelpies1;
USE casadelpies1;

CREATE TABLE Categoria (
  id_Categoria Int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  productos Varchar(30) NOT NULL,
  descripcion Varchar(50) NOT NULL
);

CREATE TABLE Marca (
  id_Marca Int PRIMARY KEY AUTO_INCREMENT,
  nombre_Marca Varchar(60)
);

CREATE TABLE Pagos (
  id_Pago Int PRIMARY KEY AUTO_INCREMENT,
  metododePago Varchar(30),
  codigoPago Int
);


CREATE TABLE PromocionesyDescuentos (
  id_Promociones Int PRIMARY KEY AUTO_INCREMENT,
  codigoDescuentos Int,
  condiciones Varchar(30),
  fecha_Inicio Date,
  fecha_Fin Date
);

CREATE TABLE Usuario (
  id_Usuario Int PRIMARY KEY AUTO_INCREMENT,
  nombre_Usuario Varchar(30),
  contrasena Varchar(16)
);

CREATE TABLE Administrador (
  id_Administrador Int PRIMARY KEY AUTO_INCREMENT,
  direccion Varchar(60),
  telefono Varchar(8),
  nombre Varchar(30),
  apellido Varchar(30)
);

CREATE TABLE Clientes (
  id_Cliente Int PRIMARY KEY AUTO_INCREMENT,
  cedula Varchar(16),
  nombre Varchar(30),
  apellido Varchar(30),
  historialdecompras Varchar(50),
  direccionEnvio Varchar(100)
);

CREATE TABLE Producto (
  id_Producto Int PRIMARY KEY AUTO_INCREMENT,
  id_Categoria Int,
  nombre Varchar(30) NOT NULL,
  descripcion Varchar(200) NOT NULL,
  precio Decimal(12,2) NOT NULL,
  tallas Varchar(8) NOT NULL,
  colores Varchar(16) NOT NULL,
  id_marca Int NOT NULL
);

CREATE TABLE DetalleVenta (
  id_detalleVenta Int PRIMARY KEY AUTO_INCREMENT,
  id_Producto Int,
  cod_Venta Int,
  id_categoria Int,
  FOREIGN KEY (id_Producto) REFERENCES Producto (id_Producto)
);

CREATE TABLE Venta (
  cod_Venta Int PRIMARY KEY AUTO_INCREMENT,
  id_Cliente Int,
  id_Empleado Int,
  fecha Date,
  Estado Varchar(50),
  Presencial_enLinea Varchar(50)
);

CREATE TABLE registro_categoria (
  id_registro_categoria Int PRIMARY KEY AUTO_INCREMENT,
  accion Varchar(10),
  id_Categoria Int,
  producto Varchar(30),
  descripcion Varchar(50),
  fecha TIMESTAMP
);



-- Relación entre Categoria y Producto
ALTER TABLE Producto ADD FOREIGN KEY (id_Categoria) REFERENCES Categoria (id_Categoria);

-- Relación entre Marca y Producto
ALTER TABLE Producto ADD FOREIGN KEY (id_marca) REFERENCES Marca (id_Marca);

-- Relación entre Pagos y Venta
ALTER TABLE Pagos ADD FOREIGN KEY (cod_Venta) REFERENCES Venta (cod_Venta);

-- Relación entre Administrador y Usuario
ALTER TABLE Administrador ADD FOREIGN KEY (id_Usuario) REFERENCES Usuario (id_Usuario);

-- Relación entre Producto y DetalleVenta
ALTER TABLE DetalleVenta ADD FOREIGN KEY (id_Producto) REFERENCES Producto (id_Producto);

-- Relación entre Venta y DetalleVenta
ALTER TABLE DetalleVenta ADD FOREIGN KEY (cod_Venta) REFERENCES Venta (cod_Venta);

-- Relación entre Venta y Clientes
ALTER TABLE Venta ADD FOREIGN KEY (id_Cliente) REFERENCES Clientes (id_Cliente);

-- Relación entre Venta y Usuario (Empleado)
ALTER TABLE Venta ADD FOREIGN KEY (id_Empleado) REFERENCES Usuario (id_Usuario);


ALTER TABLE Venta ADD FOREIGN KEY (id_Cliente) REFERENCES Clientes (id_Cliente);
ALTER TABLE Venta ADD FOREIGN KEY (id_Empleado) REFERENCES Usuario (id_Usuario);


ALTER TABLE Administrador ADD FOREIGN KEY (id_Administrador) REFERENCES Usuario (id_Usuario);
