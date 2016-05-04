export default {
    navigation: {
        header: {
            title: 'Our memory',
            menu: {
                veteran: 'Veterans',
                article: 'Articles',
                login: 'Sign in',
                register: 'Sign up',
                language: 'Language'
            },
            profile: {
                setting: 'Settings',
                profile: 'Profile',
                notification: 'Notifications',
                logout: 'Sign out'
            },
            language: {
                ru: 'Russian',
                en: 'English'
            }
        }
    },
    veteran: {
        modal: {
            title: {
                add: 'Adding the veteran',
                edit: 'Edit data on veteran'
            },
            form: {
                lastName: {
                    label: 'Last Name',
                    placeholder: 'Last Name'
                },
                firstName: {
                    label: 'First Name',
                    placeholder: 'First Name'
                },
                middleName: {
                    label: 'Middle Name',
                    placeholder: 'Middle Name'
                },
                birthPlace: {
                    label: 'Place of birth',
                    placeholder: 'Enter place of birth'
                },
                dateBirth: {
                    label: 'Date of birth'
                },
                dateDeath: {
                    label: 'Date of death'
                },
                called: {
                    label: 'Called'
                },
                troops: {
                    label: 'Branch of service',
                    placeholder: 'Branch of service'
                },
                awards: {
                    label: 'Awards',
                    placeholder: 'Awards'
                },
                description: {
                    label: 'Biography',
                    placeholder: ''
                },
                date: {
                    placeholder: 'yyyy-MM-dd'
                }
            },
            btn: {
                add: 'Add',
                edit: 'Edit',
                addPhotos: 'Add photos'
            }
        },
        btn: {
            addVeteran: 'Add veteran',
            exportVeterans: 'Export'
        }
    },
    article: {
        modal: {
            title: {
                add: 'Addition of new article',
                edit: 'Edit data on article'
            },
            form: {
                title: {
                    label: 'Title',
                    placeholder: 'Title'
                },
                fullDescription: {
                    label: 'Full description',
                    placeholder: 'Full description'
                }
            },
            btn: {
                add: 'Add',
                edit: 'Edit'
            }
        },
        btn: {
            addArticle: 'Add article'
        }
    }
}
