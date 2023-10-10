import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import Navbar from 'react-bootstrap/Navbar'; // Importa el componente Navbar de Bootstrap
import Nav from 'react-bootstrap/Nav'; // Importa el componente Nav de Bootstrap
import Offcanvas from 'react-bootstrap/Offcanvas'; // Importa el componente Offcanvas de Bootstrap
import Button from 'react-bootstrap/Button'; // Importa el componente Button de Bootstrap
import NavDropdown from 'react-bootstrap/NavDropdown'; // Importa el componente NavDropDown de Bootstrap
import Container from 'react-bootstrap/Container'; // Importa el componente Container de Bootstrap


function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      {/* Navbar principal */}
      <Navbar className="navbar-color" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="#home">La Nueva Casa Del Pies</Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav"
            style={{ display: 'none' }}
            className="d-sm-none d-xs-none"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <NavDropdown title="Clientes" id="clientes">
                <NavDropdown.Item href="#">Registrar Cliente</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Actualizar Cliente
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Ver Cliente</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  Eliminar Cliente
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Venta" id="venta">
                <NavDropdown.Item href="#">Registrar Venta</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Actualizar Venta
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Ver Venta</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  Eliminar Venta
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Categoria" id="categoria">
                <NavDropdown.Item href="#">Registrar Categoria</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Actualizar Categoria
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Ver Categoria</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  Eliminar Categoria
                </NavDropdown.Item>
              </NavDropdown>


              <NavDropdown title="Marca" id="marca">
                <NavDropdown.Item href="#">Registrar Marca</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Actualizar Venta
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Ver Marca</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  Eliminar Marca
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Pagos" id="pagos">
                <NavDropdown.Item href="#">Registrar Pagos</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Actualizar Pagos
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Ver Pagos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  Eliminar Pagos
                </NavDropdown.Item>
              </NavDropdown>

              
              <NavDropdown title="Descuentos y Promociones" id="descuentosypromociones">
                <NavDropdown.Item href="#">Registrar Descuentos y Promociones</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Actualizar Descuentos y Promociones
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Ver  descuentos y Promociones</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  Eliminar Descuentos y Promociones
                </NavDropdown.Item>
              </NavDropdown>


              <NavDropdown title="Detalle Venta" id="detalleventa">
                <NavDropdown.Item href="#">Registrar Detalle Venta</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Actualizar Detalle Venta
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Ver Detalle Venta</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  Eliminar Detalle Venta
                </NavDropdown.Item>
              </NavDropdown>



              <NavDropdown title="Administrador" id="administrador">
                <NavDropdown.Item href="#">Registrar Administrador</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Actualizar Administrador
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Ver Administrador</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  Eliminar Administrador
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Productos" id="productos">
                <NavDropdown.Item href="#">Registrar Producto</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Actualizar Producto
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Ver Producto</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  Eliminar Producto
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          {/* Botón para mostrar/ocultar el menú lateral */}
          <Button
            variant="outline-light"
            onClick={toggleMenu}
            className="d-md-none d-block"
            aria-controls="basic-navbar-nav"
            aria-expanded={showMenu ? 'true' : 'false'}
          >
            Menú
          </Button>
        </Container>
      </Navbar>


      {/* Menú lateral (Offcanvas) */}
      <Offcanvas show={showMenu} onHide={toggleMenu} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Clientes" id="clientes">
              <NavDropdown.Item href="#">Registrar Cliente</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Actualizar Cliente
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Ver Cliente</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Eliminar Cliente
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Venta" id="venta">
              <NavDropdown.Item href="#">Registrar Venta</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Actualizar Venta
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Ver Venta</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Eliminar Venta
              </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Categoria" id="categoria">
              <NavDropdown.Item href="#">Registrar Categoria</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Actualizar Categoria
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Ver Categoria</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Eliminar Categoria
              </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Marca" id="marca">
              <NavDropdown.Item href="#">Registrar Marca</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Actualizar Marca
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Ver Marca</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Eliminar Marca
              </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Pagos" id="pagos">
              <NavDropdown.Item href="#">Registrar Pagos</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Actualizar Pagos
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Ver Pagos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Eliminar Pagos
              </NavDropdown.Item>
            </NavDropdown>



            <NavDropdown title="Descuentos y Promociones " id="descuentosypromociones">
              <NavDropdown.Item href="#">Registrar Descuentos y Promociones</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Actualizar Descuentos y Promociones
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Ver Descuentos y Promociones</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Eliminar Descuentos y Promociones
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Detalle Venta" id="detalleventa">
              <NavDropdown.Item href="#">Registrar Detalle Venta</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Actualizar Detalle Venta
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Ver Detalle Venta</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Eliminar Detalle Venta
              </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Administrador" id="administrador">
              <NavDropdown.Item href="#">Registrar Administrador</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Actualizar Administrador
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Ver Administrador</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Eliminar Administrador
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Productos" id="productos">
              <NavDropdown.Item href="#">Registrar Producto</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Actualizar Producto
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Ver Producto</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Eliminar Producto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Header;