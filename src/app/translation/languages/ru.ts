export default {
    navigation: {
        header: {
            title: 'Наша память',
            menu: {
                veteran: 'Ветераны',
                article: 'Статьи',
                album: 'Фотоальбомы',
                login: 'Вход',
                register: 'Регистрация',
                language: 'Язык'
            },
            profile: {
                profile: 'Профиль',
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
                    label: 'Название статьи',
                    placeholder: 'Название статьи'
                },
                shortDescription: {
                    label: 'Краткое описание',
                    placeholder: 'Краткое описание'
                },
                fullDescription: {
                    label: 'Полное описание',
                    placeholder: 'Полное описание'
                }
            },
            btn: {
                add: 'Добавить',
                edit: 'Редактировать',
                addPhotos: 'Добавить фотографию'
            }
        },
        title: 'Последние статьи',
        btn: {
            addArticle: 'Добавить статью',
            readMore: 'Читать далее'
        }
    },
    album: {
        modal: {
            title: {
                add: 'Добавление нового альбома',
                edit: 'Редактирование данных о альбоме'
            },
            form: {
                title: {
                    label: 'Название альбома',
                    placeholder: 'Название альбома'
                },
                description: {
                    label: 'Краткое описание',
                    placeholder: 'Краткое описание'
                }
            },
            btn: {
                add: 'Добавить',
                edit: 'Редактировать',
                addPhotos: 'Добавить фотографии'
            }
        },
        title: 'Фотоальбомы',
        btn: {
            addAlbum: 'Добавить альбом'
        }
    },
    general: {
        form: {
            errors: {
                required: 'Это поле обязательно для заполнения.'
            }
        }
    },
    profile: {
        modal: {
            title: 'Страница пользователя',
            form: {
                firstName: {
                    label: 'Имя',
                    placeholder: 'Имя'
                },
                lastName: {
                    label: 'Фамилия',
                    placeholder: 'Фамилия'
                },
                currentPassword: {
                    label: 'Старый пароль',
                    placeholder: 'Старый пароль'
                },
                newPassword: {
                    label: 'Новый пароль',
                    placeholder: 'Новый пароль'
                },
                confirmPassword: {
                    label: 'Повторите пароль',
                    placeholder: 'Повторите пароль'
                }
            },
            btn: {
                save: 'Сохранить',
                crop: 'Вырезать',
                changePassword: 'Изменить пароль',
                changePhoto: 'Загрузить новую фотографию'
            }
        },
        messages: {
            passwordSuccessfullyChanged: 'Ваш пароль успешно изменён.'
        }
    },
    components: {
        comment: {
            numberComments: '{comments, plural, zero{# комментариев} one{# комментарий} few{# комментария} other{# комментариев}}',
            placeholder: 'Комментировать..',
            btn: {
                send: 'Отправить'
            }
        }
    }
}
