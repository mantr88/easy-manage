<h1>Easy manage</h1>

<p>Backend частина застосунку для керування проєктами. Цей API створено для керування проєктами за принципами REST. Реалізує авторизацію та аутентифікацію користувача. MariaDB використовується як база даних. Авторизація реалізована за допомогою присвоювання ролей зареєстрованому користувачу.Є три типа ролей: "ADMIN", "MANAGER", "EXECUTANT". За допомогою відповідних маршрутів реалізується наступний функціонал:</p>
<ul>
  <li>/api/users/register - POST реєстрація користувача в застосунку;</li>
  <li>/api/users/login - POST вхід зареєстрованого користувача до застосунку;</li>
  <li>/api/users/update-role - PATCH присвоєння іншої ролі користувачу.Права доступу є у всіх користувачів, але для призначення ролі треба передавати admin код;</li>
  <li>/api/projects/create - POST створення проєкту. Права доступу є у користувачів з ролями "ADMIN", "MANAGER";</li>
  <li>/api/projects/ - GET отримання проєктів які створив користувач. Права доступу є у користувачів з ролями "ADMIN", "MANAGER";</li>
  <li>/api/projects/ - GET отримання  всіх проєктів з БД. Права доступу є у користувачів з ролями "ADMIN", "MANAGER";</li>
  <li>/api/projects/:id - PATCH редагування проєкту який створював користувач. Права доступу є у користувача з ролями "ADMIN", "MANAGER", який створював цей проєкт;</li>
  <li>/api/projects/:id - DELETE видалення проєкту який створював користувач. Права доступу є у користувача з ролями "ADMIN", "MANAGER", який створював цей проєкт;</li>
  <li>/api/tasks/create - POST створення задачі проєту. Права доступу є у користувачів з ролями "ADMIN", "MANAGER";</li>
  <li>/api/tasks/ - GET отримання  всіх задач, виконавцем яких є користувач. Права доступу є у всіх користувачів;</li>
  <li>/api/tasks/all/:projectId - GET отримання  всіх задач визначеного (projectId) проєкту. Права доступу є у всіх користувачів;</li>
  <li>/api/tasks/:id- PATCH редагування задачі в частині стану її виконання. Права доступу є у всіх користувачів які є виконавцями даної задачі;</li>
  <li>/api/tasks/:id - DELETE видалення задачі яку створював користувач. Права доступу є у користувачів з ролями "ADMIN", "MANAGER", який створював цей проєкт;</li>
  </ul>
  <p>При створенні проєкту були використанні наступні технології: Node.js, Express.js, JWTToken, Sequelize, MariaDB</p>
  <a href='https://easy-manage-mtm3.onrender.com/api-docs'>Посилання на проєкт</a>
