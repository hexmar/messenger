# CRM-system (in progress)

Front-end часть CRM системы для роли менеджера продаж. На данный момент реализована главная страница системы. Приложение основано на create-react-app.

## На данный момент реализовано

1. В карточке рабочей смены при нажатии на кнопку отмечается время начала/конца рабочей смены и время на которое отличается фактическое начало/конец смены от запланированного. После завершения смены при нажатии на кнопку происходит сброс отмеченного времени.

2. В сайдбаре сообщения, время и дата публикации сообщения, имя пользователя и статус в сети/не в сети берутся из массива data.js. Если сообщение было отправлено сегодня или вчера, то вместо даты будет написано соответствующее слово ("сегодня" или "вчера") и время публикации.

3. В шапке отображается текущие число, месяц и день недели.

4. При наведении на меню, оно раскрывается в полном размере.