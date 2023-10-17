
const express = require('express');
const router = express.Router();

module.exports = (db) => {
    router.get('/readcategoria', (req, res) => {

        const sql = 'SELECT * FROM categoria';

        db.query(sql, (err, result) => {
            if (err) {
                console.error('Error al leer registros:', err);
                res.status(500).json({ error: 'Error al leer registros' });
            } else {
                res.status(200).json(result);
            }
        });
    });
// Ruta para crear un nuevo registro
router.post('/createCategoria', (req, res) => {
    const {id_categoria, productos,  descripcion} = req.body;

    if (!id_categoria || !productos || !descripcion) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const sql = `INSERT INTO Categoria (ID_Categoria, Productos, Descripcion) VALUES (?, ?, ?)`;
    const values = [id_categoria, productos, descripcion];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar registro:', err);
        res.status(500).json({ error: 'Error al insertar registro' });
      } else {
        res.status(201).json({ id_categoria });
      }
    });
  });

  // Ruta para actualizar un registro existente por ID
  router.put('/updateCategoria/:id_categoria', (req, res) => {
    const id_categoria = req.params.id_categoria;
    const { productos, descripcion } = req.body;

    if (!productos || !descripcion) {
      return res.status(400).json({ error: 'El nombre es obligatorio' });
    }

    const sql = `
      UPDATE Categoria
      SET Productos = ?, Descripcion = ?
      WHERE ID_Categoria = ?
    `;

    const values = [productos, descripcion, id_categoria];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al actualizar el registro:', err);
        res.status(500).json({ error: 'Error al actualizar el registro' });
      } else {
        res.status(200).json({ message: 'Registro actualizado con éxito' });
      }
    });
  });

  // Ruta para eliminar un registro existente por ID
  router.delete('/deleteCategoria/:id_categoria', (req, res) => {
    const id_categoria = req.params.id_categoria;
    const sql = 'DELETE FROM Categoria WHERE ID_Categoria = ?';

    db.query(sql, [id_categoria], (err, result) => {
      if (err) {
        console.error('Error al eliminar el registro:', err);
        res.status(500).json({ error: 'Error al eliminar el registro' });
      } else {
        res.status(200).json({ message: 'Registro eliminado con éxito' });
      }
    });
  });

// Ruta para leer registros
router.get('/readmarca', (req, res) => {
  // Utiliza la instancia de la base de datos pasada como parámetro
  // Realizar una consulta SQL para seleccionar todos los registros
  const sql = 'SELECT * FROM marca';

  // Ejecutar la consulta
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al leer registros:', err);
      res.status(500).json({ error: 'Error al leer registros' });
    } else {
      // Devolver los registros en formato JSON como respuesta
      res.status(200).json(result);
    }
  });
});

// Ruta para crear un nuevo registro con ID específico
router.post('/createMarca', (req, res) => {
  // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
  const { id_Marca, nombre_Marca } = req.body;

  // Verifica si se proporcionaron los datos necesarios
  if (!id_Marca || !nombre_Marca) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // Realiza la consulta SQL para insertar un nuevo registro con ID específico
  const sql = `INSERT INTO marca (ID_Marca, Nombre_Marca) VALUES (?, ?)`;
  const values = [id_Marca, nombre_Marca];

  // Ejecuta la consulta
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al insertar registro:', err);
      res.status(500).json({ error: 'Error al insertar registro' });
    } else {
      // Devuelve el ID del nuevo registro como respuesta
      res.status(201).json({ id_Marca });
    }
  });
});

  // Ruta para actualizar un registro existente por ID
router.put('/updateMarca/:id_Marca', (req, res) => {
  // Obtén el ID del registro a actualizar desde los parámetros de la URL
  const id_Marca = req.params.id_Marca;

  // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
  const { nombre_Marca} = req.body;

  // Verifica si se proporcionaron los datos necesarios
  if (!nombre_Marca) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // Realiza la consulta SQL para actualizar el registro por ID
  const sql = `
    UPDATE marca
    SET Nombre_Marca = ?
    WHERE ID_Marca = ?
  `;

  const values = [nombre_Marca, id_Marca];

  // Ejecuta la consulta
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
    } else {
      // Devuelve un mensaje de éxito
      res.status(200).json({ message: 'Registro actualizado con éxito' });
    }
  });
});

// Ruta para eliminar un registro existente por ID
router.delete('/deleteMarca/:id_Marca', (req, res) => {
  // Obtén el ID del registro a eliminar desde los parámetros de la URL
  const id_Marca = req.params.id_Marca;

  // Realiza la consulta SQL para eliminar el registro por ID
  const sql = 'DELETE FROM marca WHERE ID_Marca = ?';

  // Ejecuta la consulta
  db.query(sql, [id_Marca], (err, result) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
    } else {
      // Devuelve un mensaje de éxito
      res.status(200).json({ message: 'Registro eliminado con éxito' });
    }
  });
});

 // Ruta para leer registros
 router.get('/readpagos', (req, res) => {
  // Utiliza la instancia de la base de datos pasada como parámetro
  // Realizar una consulta SQL para seleccionar todos los registros
  const sql = 'SELECT * FROM pagos';

  // Ejecutar la consulta
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al leer registros:', err);
      res.status(500).json({ error: 'Error al leer registros' });
    } else {
      // Devolver los registros en formato JSON como respuesta
      res.status(200).json(result);
    }
  });
});

// Ruta para crear un nuevo registro con ID específico
router.post('/createPagos', (req, res) => {
  // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
  const { id_Pago, metododePago, codigoPago } = req.body;

  // Verifica si se proporcionaron los datos necesarios
  if (!id || !name || !countrycode || !district || !population) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // Realiza la consulta SQL para insertar un nuevo registro con ID específico
  const sql = `INSERT INTO pagos (ID_Pago, MetododePago, CodigoPago) VALUES (?, ?, ?)`;
  const values = [id_Pago, metododePago, codigoPago ];

  // Ejecuta la consulta
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al insertar registro:', err);
      res.status(500).json({ error: 'Error al insertar registro' });
    } else {
      // Devuelve el ID del nuevo registro como respuesta
      res.status(201).json({ id_Pago });
    }
  });
});

  // Ruta para actualizar un registro existente por ID
router.put('/updatePagos/:id_Pago', (req, res) => {
  // Obtén el ID del registro a actualizar desde los parámetros de la URL
  const id_Pago = req.params.id_Pago;

  // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
  const { metododePago, codigoPago} = req.body;

  // Verifica si se proporcionaron los datos necesarios
  if (!metododePago || !codigoPago) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // Realiza la consulta SQL para actualizar el registro por ID
  const sql = `
    UPDATE pagos
    SET MetododePago = ?, CodigoPago = ?
    WHERE ID_Pago = ?
  `;

  const values = [metododePago, codigoPago, id_Pago];

  // Ejecuta la consulta
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
    } else {
      // Devuelve un mensaje de éxito
      res.status(200).json({ message: 'Registro actualizado con éxito' });
    }
  });
});

// Ruta para eliminar un registro existente por ID
router.delete('/deletePagos/:id_Pago', (req, res) => {
  // Obtén el ID del registro a eliminar desde los parámetros de la URL
  const id_Pago = req.params.id_Pago;

  // Realiza la consulta SQL para eliminar el registro por ID
  const sql = 'DELETE FROM Pagos WHERE ID_Pago = ?';

  // Ejecuta la consulta
  db.query(sql, [id_Pago], (err, result) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
    } else {
      // Devuelve un mensaje de éxito
      res.status(200).json({ message: 'Registro eliminado con éxito' });
    }
  });
});

 // Ruta para leer registros
 router.get('/readpromociones', (req, res) => {
  // Utiliza la instancia de la base de datos pasada como parámetro
  // Realizar una consulta SQL para seleccionar todos los registros
  const sql = 'SELECT * FROM promocionesydescuentos';

  // Ejecutar la consulta
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al leer registros:', err);
      res.status(500).json({ error: 'Error al leer registros' });
    } else {
      // Devolver los registros en formato JSON como respuesta
      res.status(200).json(result);
    }
  });
});

// Ruta para crear un nuevo registro con ID específico
router.post('/createPromocionesyDescuentos', (req, res) => {
  // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
  const { codigoDescuentos, condiciones, fecha_Inicio, fecha_Fin } = req.body;

  // Verifica si se proporcionaron los datos necesarios
  if (!codigoDescuentos || !condiciones || !fecha_Inicio || !fecha_Fin) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // Realiza la consulta SQL para insertar un nuevo registro con ID específico
  const sql = `INSERT INTO promocionesydescuentos (codigoDescuentos, condiciones, fecha_Inicio, fecha_Fin) VALUES ( ?, ?, ?, ?)`;
  const values = [codigoDescuentos, condiciones, fecha_Inicio, fecha_Fin];

  // Ejecuta la consulta
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al insertar registro:', err);
      res.status(500).json({ error: 'Error al insertar registro' });
    } else {
      // Devuelve el ID del nuevo registro como respuesta
      res.status(200).json({ text: "" });
    }
  });
});

  // Ruta para actualizar un registro existente por ID
router.put('/updatePromocionesyDescuentos/:id_Promociones', (req, res) => {
  // Obtén el ID del registro a actualizar desde los parámetros de la URL
  const id_Promociones = req.params.id_Promociones;

  // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
  const {codigoDescuentos, condiciones, fecha_Inicio, fecha_Fin } = req.body;

  // Verifica si se proporcionaron los datos necesarios
  if (!codigoDescuentos || !condiciones || !fecha_Inicio || !fecha_Fin) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // Realiza la consulta SQL para actualizar el registro por ID
  const sql = `
    UPDATE promocionesydescuentos
    SET CodigoDescuentos = ?, Condiciones = ?, Fecha_Inicio = ?, Fecha_Fin = ?
    WHERE ID_Promociones = ?
  `;

  const values = [codigoDescuentos, condiciones, fecha_Inicio, fecha_Fin, id_Promociones];

  // Ejecuta la consulta
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
    } else {
      // Devuelve un mensaje de éxito
      res.status(200).json({ message: 'Registro actualizado con éxito' });
    }
  });
});

// Ruta para eliminar un registro existente por ID
router.delete('/deletePromocionesyDescuentos/:id_Promociones', (req, res) => {
  // Obtén el ID del registro a eliminar desde los parámetros de la URL
  const id_Promociones = req.params.id_Promociones;

  // Realiza la consulta SQL para eliminar el registro por ID
  const sql = 'DELETE FROM promocionesydescuentos WHERE ID_Promociones = ?';

  // Ejecuta la consulta
  db.query(sql, [id_Promociones], (err, result) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
    } else {
      // Devuelve un mensaje de éxito
      res.status(200).json({ message: 'Registro eliminado con éxito' });
    }
  });
});

 // Ruta para leer registros
 router.get('/readadministrador', (req, res) => {
  // Utiliza la instancia de la base de datos pasada como parámetro
  // Realizar una consulta SQL para seleccionar todos los registros
  const sql = 'SELECT * FROM administrador';

  // Ejecutar la consulta
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al leer registros:', err);
      res.status(500).json({ error: 'Error al leer registros' });
    } else {
      // Devolver los registros en formato JSON como respuesta
      res.status(200).json(result);
    }
  });
});

// Ruta para crear un nuevo registro con ID específico
router.post('/createAdministrador', (req, res) => {
  // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
  const { id_Administrador, direccion, telefono, nombre, apellido } = req.body;

  // Verifica si se proporcionaron los datos necesarios
  if (!id_Administrador || !direccion || !telefono || !nombre || !apellido) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // Realiza la consulta SQL para insertar un nuevo registro con ID específico
  const sql = `INSERT INTO administrador (ID_Administrador, Direccion, Telefono, Nombre, Apellido) VALUES (?, ?, ?, ?, ?)`;
  const values = [id_Administrador, direccion, telefono, nombre, apellido];

  // Ejecuta la consulta
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al insertar registro:', err);
      res.status(500).json({ error: 'Error al insertar registro' });
    } else {
      // Devuelve el ID del nuevo registro como respuesta
      res.status(201).json({ id_Administrador });
    }
  });
});

  // Ruta para actualizar un registro existente por ID
router.put('/updateAdministrador/:id_Administrador', (req, res) => {
  // Obtén el ID del registro a actualizar desde los parámetros de la URL
  const id_Administrador = req.params.id_Administrador;

  // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
  const { direccion, telefono, nombre, apellido } = req.body;

  // Verifica si se proporcionaron los datos necesarios
  if (!direccion || !telefono || !nombre || !apellido) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // Realiza la consulta SQL para actualizar el registro por ID
  const sql = `
    UPDATE administrador
    SET Direccion = ?, Telefono = ?, Nombre = ?, Apellido = ?
    WHERE ID = ?
  `;
 
  const values = [direccion, telefono, nombre, apellido, id_Administrador];

  // Ejecuta la consulta
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
    } else {
      // Devuelve un mensaje de éxito
      res.status(200).json({ message: 'Registro actualizado con éxito' });
    }
  });
});

// Ruta para eliminar un registro existente por ID
router.delete('/deleteAdministrador/:id_Administrador', (req, res) => {
  // Obtén el ID del registro a eliminar desde los parámetros de la URL
  const id_Administrador = req.params.id_Administrador;

  // Realiza la consulta SQL para eliminar el registro por ID
  const sql = 'DELETE FROM administrador WHERE ID_Administrador = ?';

  // Ejecuta la consulta
  db.query(sql, [id_Administrador], (err, result) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
    } else {
      // Devuelve un mensaje de éxito
      res.status(200).json({ message: 'Registro eliminado con éxito' });
    }
  });
});



 // Ruta para leer registros
 router.get('/readdetalle', (req, res) => {
  // Utiliza la instancia de la base de datos pasada como parámetro
  // Realizar una consulta SQL para seleccionar todos los registros
  const sql = 'SELECT * FROM DetalleVenta';

  // Ejecutar la consulta
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al leer registros:', err);
      res.status(500).json({ error: 'Error al leer registros' });
    } else {
      // Devolver los registros en formato JSON como respuesta
      res.status(200).json(result);
    }
  });
});

// Ruta para crear un nuevo registro con ID específico
router.post('/createDetalleVenta', (req, res) => {
  // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
  const { id_detalleVenta,id_Producto,cod_Venta,id_Categoria } = req.body;

  // Verifica si se proporcionaron los datos necesarios
  if (!id_detalleVenta || !id_Producto || !cod_Venta || !id_Categoria) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // Realiza la consulta SQL para insertar un nuevo registro con ID específico
  const sql = `INSERT INTO DetalleVenta (id_detalleVenta,id_Producto,cod_Venta,id_Categoria) VALUES (?, ?, ?, ?)`;
  const values = [id_detalleVenta,id_Producto,cod_Venta,id_Categoria];

  // Ejecuta la consulta
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al insertar registro:', err);
      res.status(500).json({ error: 'Error al insertar registro' });
    } else {
      // Devuelve el ID del nuevo registro como respuesta
      res.status(201).json({ id_detalleVenta });
    }
  });
});

  // Ruta para actualizar un registro existente por ID
router.put('/updateDetalleVenta/:id_detalleVenta', (req, res) => {
  // Obtén el ID del registro a actualizar desde los parámetros de la URL
  const id_detalleVenta = req.params.id_detalleVenta;

  // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
  const {id_Producto,cod_Venta,id_Categoria } = req.body;

  // Verifica si se proporcionaron los datos necesarios
  if (!id_Producto || !cod_Venta || !id_Categoria) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // Realiza la consulta SQL para actualizar el registro por ID
  const sql = `
    UPDATE DetalleVenta
    SET id_Producto = ?, cod_Venta = ?, id_Categoria = ?
    WHERE id_detalleVenta = ?
  `;

  const values = [id_Producto,cod_Venta,id_Categoria,id_detalleVenta];

  // Ejecuta la consulta
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
    } else {
      // Devuelve un mensaje de éxito
      res.status(200).json({ message: 'Registro actualizado con éxito' });
    }
  });
});

// Ruta para eliminar un registro existente por ID
router.delete('/deleteDetalleVenta/:id_detalleVenta', (req, res) => {
  // Obtén el ID del registro a eliminar desde los parámetros de la URL
  const id_detalleVenta = req.params.id_detalleVenta;

  // Realiza la consulta SQL para eliminar el registro por ID
  const sql = 'DELETE FROM DetalleVenta WHERE id_detalleVenta = ?';

  // Ejecuta la consulta
  db.query(sql, [id_detalleVenta], (err, result) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
    } else {
      // Devuelve un mensaje de éxito
      res.status(200).json({ message: 'Registro eliminado con éxito' });
    }
  });
});



// Ruta para leer registros
router.get('/readclientes', (req, res) => {
  // Utiliza la instancia de la base de datos pasada como parámetro
  // Realizar una consulta SQL para seleccionar todos los registros
  const sql = 'SELECT * FROM Clientes';

  // Ejecutar la consulta
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al leer registros:', err);
      res.status(500).json({ error: 'Error al leer registros' });
    } else {
      // Devolver los registros en formato JSON como respuesta
      res.status(200).json(result);
    }
  });
});

// Ruta para crear un nuevo registro con ID específico
router.post('/createClientes', (req, res) => {
  // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
  const { cedula, nombre, apellido, historialdecompras, direccionEnvio } = req.body;

  // Verifica si se proporcionaron los datos necesarios
  if (!cedula|| !nombre || !apellido || !historialdecompras|| !direccionEnvio) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // Realiza la consulta SQL para insertar un nuevo registro con ID específico
  const sql = `INSERT INTO Clientes (cedula, nombre, apellido, historialdecompras, direccionEnvio) VALUES (?, ?, ?, ?, ?)`;
  const values = [cedula, nombre, apellido, historialdecompras, direccionEnvio];

  // Ejecuta la consulta
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al insertar registro:', err);
      res.status(500).json({ error: 'Error al insertar registro' });
    } else {
      // Devuelve el ID del nuevo registro como respuesta
      res.status(200).json({ ok: 'Registro ingresado' });
    }
  });
});

  // Ruta para actualizar un registro existente por ID
router.put('/updateClientes/:id_Cliente', (req, res) => {
  // Obtén el ID del registro a actualizar desde los parámetros de la URL
  const id_Cliente = req.params.id_Cliente;

  // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
  const { cedula, nombre, apellido, historialdecompras, direccionEnvio} = req.body;

  // Verifica si se proporcionaron los datos necesarios
  if (!cedula || !nombre || !apellido || !historialdecompras || !direccionEnvio) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // Realiza la consulta SQL para actualizar el registro por ID
  const sql = `
    UPDATE Clientes
    SET cedula = ?, nombre = ?, apellido = ?, historialdecompras = ?, direccionEnvio = ?
    WHERE id_Cliente= ?
  `;
 
  const values = [cedula, nombre, apellido, historialdecompras, direccionEnvio, id_Cliente];

  // Ejecuta la consulta
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
    } else {
      // Devuelve un mensaje de éxito
      res.status(200).json({ message: 'Registro actualizado con éxito' });
    }
  });
});

// Ruta para eliminar un registro existente por ID
router.delete('/deleteClientes/:id_Cliente', (req, res) => {
  // Obtén el ID del registro a eliminar desde los parámetros de la URL
  const id_Cliente = req.params.id_Cliente;

  // Realiza la consulta SQL para eliminar el registro por ID
  const sql = 'DELETE FROM Clientes WHERE id_Cliente = ?';

  // Ejecuta la consulta
  db.query(sql, [id_Cliente], (err, result) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
    } else {
      // Devuelve un mensaje de éxito
      res.status(200).json({ message: 'Registro eliminado con éxito' });
    }
  });
});





// Ruta para leer registros
router.get('/readVenta', (req, res) => {
  // Utiliza la instancia de la base de datos pasada como parámetro
  // Realizar una consulta SQL para seleccionar todos los registros
  const sql = 'SELECT * FROM Venta';

  // Ejecutar la consulta
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al leer registros:', err);
      res.status(500).json({ error: 'Error al leer registros' });
    } else {
      // Devolver los registros en formato JSON como respuesta
      res.status(200).json(result);
    }
  });
});

// Ruta para crear un nuevo registro con ID específico
router.post('/createVenta', (req, res) => {
  // Recibe los datos del nuevo registro desde el cuerpo de la solicitud (req.body)
  const { cod_Venta, id_Cliente, id_Empleado, fecha, Estado, Presencial_enLinea } = req.body;

  // Verifica si se proporcionaron los datos necesarios
  if (!cod_Venta|| !id_Cliente|| !id_Empleado || !fecha || !Estado|| !Presencial_enLinea) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // Realiza la consulta SQL para insertar un nuevo registro con ID específico
  const sql = `INSERT INTO Venta (cod_Venta, id_Cliente, id_Empleado, fecha, Estado, Presencial_enLinea ) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [cod_Venta, id_Cliente, id_Empleado, fecha, Estado, Presencial_enLinea ];

  // Ejecuta la consulta
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al insertar registro:', err);
      res.status(500).json({ error: 'Error al insertar registro' });
    } else {
      // Devuelve el ID del nuevo registro como respuesta
      res.status(201).json({ cod_Venta });
    }
  });
});

  // Ruta para actualizar un registro existente por ID
router.put('/updateVneta/:cod_Venta', (req, res) => {
  // Obtén el ID del registro a actualizar desde los parámetros de la URL
  const cod_Venta = req.params.cod_Venta;

  // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
  const {id_Cliente, id_Empleado, fecha, Estado, Presencial_enLinea} = req.body;

  // Verifica si se proporcionaron los datos necesarios
  if (!id_Cliente|| !id_Empleado || !fecha || !Estado || !Presencial_enLinea) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // Realiza la consulta SQL para actualizar el registro por ID
  const sql = `
    UPDATE Venta
    SET id_Cliente = ?, id_Empleado = ?, fecha = ?, Estado = ?, Presencial_enLinea = ?
    WHERE cod_Venta= ?
  `;
 
  const values = [id_Cliente, id_Empleado, fecha, Estado,  Presencial_enLinea, cod_Venta ];

  // Ejecuta la consulta
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
    } else {
      // Devuelve un mensaje de éxito
      res.status(200).json({ message: 'Registro actualizado con éxito' });
    }
  });
});

// Ruta para eliminar un registro existente por ID
router.delete('/deleteVenta/:cod_Venta', (req, res) => {
  // Obtén el ID del registro a eliminar desde los parámetros de la URL
  const cod_Venta = req.params.cod_Venta;

  // Realiza la consulta SQL para eliminar el registro por ID
  const sql = 'DELETE FROM Venta WHERE cod_Venta = ?';

  // Ejecuta la consulta
  db.query(sql, [cod_Venta], (err, result) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
    } else {
      // Devuelve un mensaje de éxito
      res.status(200).json({ message: 'Registro eliminado con éxito' });
    }
  });
});










// Ruta para crear un nuevo registro
router.post('/createProducto', (req, res) => {
  const {id_producto,id_categoria, nombre,descripcion,precio,tallas,colores,id_marca} = req.body;

  if (!id_producto || !id_categoria||! nombre ||!descripcion ||!precio ||!tallas ||!colores ||!id_marca) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const sql = `INSERT INTO Producto (id_producto,id_categoria, nombre,descripcion,precio,tallas,colores,id_marca) VALUES (?,?,?,?,?,?,?, ?)`;
  const values = [id_producto,id_categoria, nombre,descripcion,precio,tallas,colores,id_marca];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al insertar registro:', err);
      res.status(500).json({ error: 'Error al insertar registro' });
    } else {
      res.status(201).json({ id_producto });
    }
  });
});

// Ruta para actualizar un registro existente por ID
router.put('/updateProducto/:id_producto', (req, res) => {
  const id_producto = req.params.id_producto;
  const { id_categoria, nombre, descripcion, precio, tallas, colores, id_marca } = req.body;

  if (!id_categoria || !nombre || !descripcion || !precio || !tallas || !colores || !id_marca) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const sql = `
    UPDATE Producto
    SET id_categoria=?, nombre=?, descripcion=?, precio=?, tallas=?, colores=?, id_marca=?
    WHERE id_producto= ?
  `;

  const values = [id_categoria, nombre, descripcion, precio, tallas, colores, id_marca, id_producto];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al actualizar el registro:', err);
      res.status(500).json({ error: 'Error al actualizar el registro' });
    } else {
      res.status(200).json({ message: 'Registro actualizado con éxito' });
    }
  });
});


// Ruta para eliminar un registro existente por ID
router.delete('/deleteProducto/:id_producto', (req, res) => {
  const id_producto = req.params.id_producto;
  const sql = 'DELETE FROM Producto WHERE id_producto = ?';

  db.query(sql, [id_producto], (err, result) => {
    if (err) {
      console.error('Error al eliminar el registro:', err);
      res.status(500).json({ error: 'Error al eliminar el registro' });
    } else {
      res.status(200).json({ message: 'Registro eliminado con éxito' });
    }
  });
});



return router;
};

