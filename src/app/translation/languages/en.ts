export default {
    navigation: {
        header: {
            title: 'Our memory',
            menu: {
                veteran: 'Veterans',
                article: 'Articles',
                album: 'Albums',
                login: 'Sign in',
                register: 'Sign up',
                language: 'Language'
            },
            profile: {
                profile: 'Profile',
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
                shortDescription: {
                    label: 'Short description',
                    placeholder: 'Short description'
                },
                fullDescription: {
                    label: 'Full description',
                    placeholder: 'Full description'
                }
            },
            btn: {
                add: 'Add',
                edit: 'Edit',
                addPhotos: 'Add photo'
            }
        },
        title: 'Latest articles',
        btn: {
            addArticle: 'Add article',
            readMore: 'Read more',
            edit: 'Edit',
            remove: 'Delete'
        }
    },
    album: {
        modal: {
            title: {
                add: 'Add a new album',
                edit: 'Edit data on album'
            },
            form: {
                title: {
                    label: 'Title',
                    placeholder: 'Title'
                },
                description: {
                    label: 'Short description',
                    placeholder: 'Short description'
                }
            },
            btn: {
                add: 'Add',
                edit: 'Edit',
                addPhotos: 'Add photos'
            }
        },
        title: 'Albums',
        btn: {
            addAlbum: 'Add album'
        }
    },
    profile: {
        modal: {
            title: 'User page',
            form: {
                firstName: {
                    label: 'First Name',
                    placeholder: 'First Name'
                },
                lastName: {
                    label: 'Last Name',
                    placeholder: 'Last Name'
                },
                currentPassword: {
                    label: 'Current password',
                    placeholder: 'Current password'
                },
                newPassword: {
                    label: 'New password',
                    placeholder: 'New password'
                },
                confirmPassword: {
                    label: 'Repeat new password',
                    placeholder: 'Repeat new password'
                }
            },
            btn: {
                save: 'Save',
                crop: 'Crop',
                changePassword: 'Change password',
                changePhoto: 'Upload a new photo'
            }
        },
        messages: {
            passwordSuccessfullyChanged: 'Your password has been changed successfully'
        }
    },
    general: {
        form: {
            errors: {
                required: 'This field is required.'
            }
        }
    },
    components: {
        comment: {
            numberComments: '{comments, plural, one{# comment} other{# comments}}',
            placeholder: 'Your comment..',
            btn: {
                send: 'Post'
            }
        }
    },
    confirm: {
        message: 'Are you sure you want to delete the entry?',
        btn: {
            ok: 'Yes',
            cancel: 'No'
        }
    }
}
