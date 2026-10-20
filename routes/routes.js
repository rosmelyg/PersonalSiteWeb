import fs from "fs";

const serverHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url.startsWith("/assets/") && method === "GET") {
    const filePath = "." + url;
    let contentType = "text/plain";

    if (url.endsWith(".css")) contentType = "text/css";
    else if (url.endsWith(".png")) contentType = "image/png";
    else if (url.endsWith(".jpg") || url.endsWith(".jpeg")) contentType = "image/jpeg";

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end("Archivo no encontrado");
      } else {
        res.setHeader("Content-Type", contentType);
        res.end(data);
      }
    });
    return;
  }

  // home route
  if (url === "/" && method === "GET") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Home - Rosmely Gómez</title>
    <link rel="stylesheet" href="/assets/css/estilos.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/valores">Valores</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/proyectos">Proyectos</a></li>
                <li><a href="/contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section>
            <h1>Acerca de Mí</h1>
            <img src="/assets/img/perfil.jpg" alt="Foto de Rosmely" width="250">
            <p>
                Buenas!! Mi nombre es Rosmely Gómez, una joven estudiante de Desarrollo de Software en el ITLA. 
                Me apasiona el desarrollo frontend, el diseño UI/UX y el modelado de bases de datos. 
                En mi tiempo libre disfruto leer, compartir con mis mascotas y explorar nuevos lugares.
            </p>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Rosmely Gómez. Todos los derechos reservados.</p>
    </footer>
</body>
</html>`);
    res.end();
  }

  // values route
  else if (url === "/valores" && method === "GET") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mis Valores</title>
    <link rel="stylesheet" href="/assets/css/estilos.css">
</head>
<body>
    <header>
        <ul>
            <li><a href="/">Volver al Home</a></li>
        </ul>
    </header>
    
    <main>
        <section>
            <h2>Valores que me definen</h2>
            <ul>
                <li><strong>Responsabilidad:</strong> Destaco un gran nivel de compromiso con las entregas de mis asignaciones y proyectos.</li>
                <li><strong>Dedicación:</strong> Enfoque constante en aprender.</li>
                <li><strong>Trabajo en equipo:</strong> Facilidad para colaborar, manejar ramas en Git y coordinar soluciones.</li>
                <li><strong>Empatía:</strong> Disposición para escuchar y entender los requerimientos del usuario.</li>
            </ul>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Rosmely Gómez</p>
    </footer>
</body>
</html>`);
    res.end();
  }

  // skills route
  else if (url === "/skills" && method === "GET") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mis Skills</title>
    <link rel="stylesheet" href="/assets/css/estilos.css">
</head>
<body>
    <header>
        <ul>
            <li><a href="/">Volver al Home</a></li>
        </ul>
    </header>
    
    <main>
        <section>
            <h2>Conocimientos de Programación</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Valoración (1 al 5)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>C# / .NET (Windows Forms, ASP.NET Core)</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>Control de Versiones (Git y GitHub)</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Bases de Datos (SQL Server, MongoDB, MySQL)</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Python (Pandas, Matplotlib)</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Modelado de Software (UML, PlantUML, Draw.io)</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>JavaScript / Node.js</td>
                        <td>4</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Rosmely Gómez</p>
    </footer>
</body>
</html>`);
    res.end();
  }

  // proyect route 
  else if (url === "/proyectos" && method === "GET") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mis Proyectos</title>
    <link rel="stylesheet" href="/assets/css/estilos.css">
</head>
<body>
    <header>
        <ul>
            <li><a href="/">Volver al Home</a></li>
        </ul>
    </header>
    
    <main>
        <section>
            <h2>Proyectos Realizados</h2>
            
            <div>
                <h3>ImportCostPro</h3>
                <p>Aplicación web en ASP.NET Core MVC para la gestión y análisis de costos de importación y cálculo de aranceles.</p>
                <img src="/assets/img/importcost.png" alt="Captura de ImportCostPro" width="300">
            </div>

            <br>

            <div>
                <h3>Artemis Banking Pro (ABP)</h3>
                <p>Módulo bancario integral que procesa transacciones, avances de tarjeta de crédito y transferencias entre cuentas.</p>
                <img src="/assets/img/artemis.png" alt="Captura de Artemis Banking Pro" width="300">
            </div>

            <br>

            <div>
                <h3>Sistema de Gestión de Autobuses</h3>
                <p>Sistema de escritorio desarrollado en C# y SQL Server para la administración de rutas, autobuses, choferes y viajes.</p>
                <img src="/assets/img/autobuses.png" alt="Captura del Sistema de Autobuses" width="300">
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Rosmely Gómez</p>
    </footer>
</body>
</html>`);
    res.end();
  }

  // contact route for get request to display the contact form
  else if (url === "/contacto" && method === "GET") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Contacto</title>
    <link rel="stylesheet" href="/assets/css/estilos.css">
</head>
<body>
    <header>
        <ul>
            <li><a href="/">Volver al Home</a></li>
        </ul>
    </header>
    
    <main>
        <section>
            <h2>Contacto</h2>
            <form action="/contacto" method="POST">
                <div>
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required>
                </div>
                <br>
                <div>
                    <label for="apellido">Apellido:</label>
                    <input type="text" id="apellido" name="apellido" required>
                </div>
                <br>
                <div>
                    <label for="correo">Correo Electrónico:</label>
                    <input type="email" id="correo" name="correo" required>
                </div>
                <br>
                <div>
                    <label for="descripcion">Descripción de los servicios que desea:</label>
                    <br>
                    <textarea id="descripcion" name="descripcion" rows="5" cols="40" required></textarea>
                </div>
                <br>
                <div>
                    <button type="submit">Enviar Mensaje</button>
                </div>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Rosmely Gómez</p>
    </footer>
</body>
</html>`);
    res.end();
  }

  // contact route for post request to handle form submission
  else if (url === "/contacto" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      // process the parsedBody to extract form data
      const campos = parsedBody.split("&");
      const nombre = campos[0]?.split("=")[1]?.replaceAll("+", " ") || "";
      const apellido = campos[1]?.split("=")[1]?.replaceAll("+", " ") || "";
      const correo = decodeURIComponent(campos[2]?.split("=")[1] || "");
      const descripcion = decodeURIComponent(
        campos[3]?.split("=")[1]?.replaceAll("+", " ") || ""
      );

      const contenidoGuardar = `Nombre: ${nombre} ${apellido} | Correo: ${correo} | Servicios: ${descripcion}\n`;

      fs.writeFile("contactos.txt", contenidoGuardar, () => {
        res.statusCode = 302;
        res.setHeader("Location", "/contacto");
        res.end();
      });
    });
  }

  // 404 route for any other request
  else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>404 Not Found</title>
    <link rel="stylesheet" href="/assets/css/estilos.css">
</head>
<body>
    <header>
        <ul>
            <li><a href="/">Volver al Home</a></li>
        </ul>
    </header>
    <main>
        <section>
            <h1>404 - Page Not Found</h1>
            <p style="text-align: center;">La página que estás buscando no existe.</p>
        </section>
    </main>
</body>
</html>`);
    res.end();
  }
};

export default serverHandler;