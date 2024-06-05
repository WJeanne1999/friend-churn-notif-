document.addEventListener('DOMContentLoaded', () => {
    const notifications = [
        { name: 'Daniel', frequency: 3 },
        { name: 'Lucy', frequency: 3 },
        { name: 'Georgie', frequency: 3 },
        { name: 'Lukas', frequency: 2 },
        { name: 'George', frequency: 3 },
        { name: 'Isabelle', frequency: 3 },
        { name: 'Irene', frequency: 1 },
        { name: 'Ted', frequency: 1 },
        { name: 'Bailey', frequency: 1 },
        { name: 'Shauna', frequency: 2 },
        { name: 'Zosia', frequency: 2 },
        { name: 'Dulant', frequency: 1 },
        { name: 'Stella', frequency: 1 },
        { name: 'Cynthia', frequency: 3 },
        { name: 'Angie', frequency: 2 },
        { name: 'Chris', frequency: 3 },
        { name: 'Anouk', frequency: 2 },
        { name: 'Lys', frequency: 2 },
        { name: 'Rianna', frequency: 4 },
        { name: 'Lydia', frequency: 2 },
        { name: 'Zindzi', frequency: 2 },
        { name: 'Kate', frequency: 2 },
        { name: 'Rui', frequency: 2 },
        { name: 'Lota', frequency: 2 },
    ];
// friends and number of notifs per hr of the day 'ideal correspondance' divided by 7 then 12
    const notificationContainer = document.getElementById('notification-container');

    const styles = [
        'notification-style-1',
        'notification-style-2',
        'notification-style-3',
        'notification-style-4',
        'notification-style-5',
        'notification-style-6',
        'notification-style-7',
        'notification-style-8',
        'notification-style-9',
        'notification-style-10',
        'notification-style-11',
        'notification-style-12',
        'notification-style-13',
        'notification-style-14',
        'notification-style-15',
        'notification-style-16',
        'notification-style-17',
        'notification-style-18',
        'notification-style-19',
        'notification-style-20'
    ];

    const fonts = [
        'font-1',
        'font-2',
        'font-3',
        'font-4',
        'font-5'
    ];

    const fontSizes = [
        'font-size-1',
        'font-size-2',
        'font-size-3',
        'font-size-4',
        'font-size-5'
    ];

    function getRandomElement(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    function getRandomPosition() {
        const containerWidth = notificationContainer.offsetWidth;
        const containerHeight = notificationContainer.offsetHeight;
        const x = Math.floor(Math.random() * (containerWidth - 320)); // Adjust for notification width
        const y = Math.floor(Math.random() * (containerHeight - 100)); // Adjust for notification height
        return { x, y };
    }

    function createNotification(name) {
        const notification = document.createElement('div');
        notification.classList.add('notification');

        // Randomise style, font, and font size
        notification.classList.add(getRandomElement(styles));
        notification.classList.add(getRandomElement(fonts));
        notification.classList.add(getRandomElement(fontSizes));

        const message = document.createElement('p');
        message.innerText = `Reminder: Time to message ${name}!`;
        notification.appendChild(message);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'X';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => {
            notificationContainer.removeChild(notification);
        };
        notification.appendChild(deleteBtn);

        const { x, y } = getRandomPosition();
        notification.style.left = `${x}px`;
        notification.style.top = `${y}px`;

        notificationContainer.appendChild(notification);
    }

    function sendNotifications() {
        notifications.forEach(notification => {
            for (let i = 0; i < notification.frequency; i++) {
                setTimeout(() => {
                    createNotification(notification.name);
                }, i * 5000); // 5-seconds between notifications
            }
        });
    }

    sendNotifications();

    
    setInterval(() => {
        sendNotifications();
    }, 3600000); //  = 1 hour
});


