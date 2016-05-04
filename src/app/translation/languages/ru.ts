export default {
    navigation: {
        header: {
            title: 'Наша память',
            menu: {
                veteran: 'Ветераны',
                article: 'Статьи',
                login: 'Вход',
                register: 'Регистрация',
                language: 'Язык'
            },
            profile: {
                setting: 'Настройки',
                profile: 'Профиль',
                notification: 'Уведомления',
                logout: 'Выйти'
            },
            language: {
                ru: 'Русский',
                en: 'Английский'
            }
        }
    },
    veteran: {
        modal: {
            title: {
                add: 'Добавление ветерана',
                edit: 'Редактирование данных о ветеране'
            },
            form: {
                lastName: {
                    label: 'Фамилия',
                    placeholder: 'Фамилия'
                },
                firstName: {
                    label: 'Имя',
                    placeholder: 'Имя'
                },
                middleName: {
                    label: 'Отчество',
                    placeholder: 'Отчество'
                },
                birthPlace: {
                    label: 'Место рождения',
                    placeholder: 'Введите место рождения'
                },
                dateBirth: {
                    label: 'Дата рождения'
                },
                dateDeath: {
                    label: 'Дата смерти'
                },
                called: {
                    label: 'Призван'
                },
                troops: {
                    label: 'Род войск',
                    placeholder: 'Род войск'
                },
                awards: {
                    label: 'Награды',
                    placeholder: 'Награды'
                },
                description: {
                    label: 'Биография',
                    placeholder: ''
                },
                date: {
                    placeholder: 'гггг-ММ-дд'
                }
            },
            btn: {
                add: 'Добавить',
                edit: 'Редактировать',
                addPhotos: 'Добавить фотографии'
            }
        },
        btn: {
            addVeteran: 'Добавить ветерана',
            exportVeterans: 'Экспортировать'
        }
    },
    article: {
        modal: {
            title: {
                add: 'Добавление новой статьи',
                edit: 'Редактирование данных о статье'
            },
            form: {
                title: {
                    label: 'Заголовок',
                    placeholder: 'Заголовок'
                },
                fullDescription: {
                    label: 'Полное описание',
                    placeholder: 'Полное описание'
                }
            },
            btn: {
                add: 'Добавить',
                edit: 'Редактировать'
            }
        },
        btn: {
            addVeteran: 'Добавить статью'
        }
    }
}
