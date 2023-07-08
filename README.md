# 1. Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"
https://prnt.sc/Jv2FwbCdpxhm

# 2. Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
https://prnt.sc/xyKf0QfUjDFd   

# 3. Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
https://prnt.sc/7V9QuIHQa1fq    

# 4. Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
https://prnt.sc/c_s1J-lX_hBR

# 5. Виклик команд без "commander".
// invokeAction({action: "list"});
// invokeAction({action: "get", id: "05olLMgyVQdWRwgKfg5J6"});
// invokeAction({action: "add", name: "Mango", email: "mango@gmail.com", phone: "322-22-22"});
// invokeAction({action: "remove", id: "qdggE76Jtbfd9eWJHrssH"});