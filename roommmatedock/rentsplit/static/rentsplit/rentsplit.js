document.addEventListener('DOMContentLoaded', function() {

    //TABS
    const userTab = document.querySelector('#tab-userid');
    const expenseTab = document.querySelector('#tab-expenseid');
    const resultsTab = document.querySelector('#tab-resultsid');

    const userApp = document.querySelector('#app-userid');
    const expensesApp = document.querySelector('#app-expenseid');
    const resultsApp = document.querySelector('#app-resultsid');

    //Default show Create Profile
    // userApp.style.display = 'flex';
    // expensesApp.style.display = 'none';
    // resultsApp.style.display = 'none';

    //session store which tab was last open
    var active_tab = sessionStorage.getItem('activeTab');

    //Display active tab
    if (active_tab === 'expenses') {
        userApp.style.display = 'none';
        expensesApp.style.display = 'flex';
        resultsApp.style.display = 'none';
        expenseTab.classList.add('active');
    }
    else if (active_tab === 'results') {
        userApp.style.display = 'none';
        expensesApp.style.display = 'none';
        resultsApp.style.display = 'flex';
        resultsTab.classList.add('active');
    }
    else {
        userApp.style.display = 'flex';
        expensesApp.style.display = 'none';
        resultsApp.style.display = 'none';
        userTab.classList.add('active');
    }

    //Tab buttons
    userTab.addEventListener('click', function() {
        sessionStorage.setItem('activeTab', 'users');
        userApp.style.display = 'flex';
        expensesApp.style.display = 'none';
        resultsApp.style.display = 'none';
        userTab.classList.add('active');
        expenseTab.classList.remove('active');
        resultsTab.classList.remove('active');
    })

    expenseTab.addEventListener('click', function() {
        sessionStorage.setItem('activeTab', 'expenses');
        userApp.style.display = 'none';
        expensesApp.style.display = 'flex';
        resultsApp.style.display = 'none';
        expenseTab.classList.add('active');
        userTab.classList.remove('active');
        resultsTab.classList.remove('active');
    })

    resultsTab.addEventListener('click', function() {
        sessionStorage.setItem('activeTab', 'results');
        userApp.style.display = 'none';
        expensesApp.style.display = 'none';
        resultsApp.style.display = 'flex';
        resultsTab.classList.add('active');
        expenseTab.classList.remove('active');
        userTab.classList.remove('active');
    })

    const ModalBody = document.querySelectorAll('.modal-body')
    
    //MODAL FOR EXPENSES
    const expenseModal = document.querySelector('#expense-modalid');
    const expenseModalButton = document.querySelector('#expense-modal-openid');
    const expenseClose = document.querySelector('#expenses-closeid');

    expenseModalButton.addEventListener('click', function(){
        ModalBody.forEach(ModalBody => {
            ModalBody.classList.remove('active');
        })
        expenseModal.style.display = 'flex';
    })

    expenseClose.addEventListener('click', function() {
        ModalBody.forEach(ModalBody => {
            ModalBody.classList.add('active');
        })
        
        expenseModal.addEventListener('animationend', function() {
            ModalBody.forEach(ModalBody => {
                if (ModalBody.classList.contains('active')) {
                    expenseModal.style.display = 'none';
                }
            })
        })
        
    })

    window.addEventListener('click', function(event) {
        if (event.target == expenseModal) {
            expenseModal.style.display = 'none';
        }
    })
    
    //MODAL FOR RENT
    const rentModal = document.querySelector('#rent-modalid');
    const rentModalButton = document.querySelector('#rent-buttonid');
    const rentModalClose = document.querySelector('#rent-closeid');

    rentModalButton.addEventListener('click', function() {
        ModalBody.forEach(ModalBody => {
            ModalBody.classList.remove('active');
        })
        rentModal.style.display = 'flex';
    })

    rentModalClose.addEventListener('click', function() {
        ModalBody.forEach(ModalBody => {
            ModalBody.classList.add('active');
        })
        
        rentModal.addEventListener('animationend', function() {
            ModalBody.forEach(ModalBody => {
                if (ModalBody.classList.contains('active')) {
                    rentModal.style.display = 'none';
                }
            })        })
        
    })

    window.addEventListener('click', function(event) {
        if (event.target == rentModal) {
            rentModal.style.display = 'none';
        }
    })

    //ADD USER FOR EXISTING PROFILE
    
    //MODAL FOR ADD UAER
    const addUserModal = document.querySelector('#add-user-modal');
    const addUserFromProfileButton = document.querySelector('#add-user-in-profile');
    const addUserModalClose = document.querySelector('#add-user-modal-close');

    addUserFromProfileButton.addEventListener('click', function() {
        ModalBody.forEach(ModalBody => {
            ModalBody.classList.remove('active');
        })
        addUserModal.style.display = 'flex';
    })

    addUserModalClose.addEventListener('click', function() {
        ModalBody.forEach(ModalBody => {
            ModalBody.classList.add('active');
        })
        
        addUserModal.addEventListener('animationend', function() {
            ModalBody.forEach(ModalBody => {
                if (ModalBody.classList.contains('active')) {
                    addUserModal.style.display = 'none';
                }
            })        })
    })

    window.addEventListener('click', function(event) {
        if (event.target == addUserModal) {
            addUserModal.style.display = 'none';
        }
    })

    //RESET EXPENSES
    const resetExpensesModal = document.querySelector('#reset-expenses-modal');
    const resetExpensesButton = document.querySelector('#reset-profile-button');
    const resetExpensesClose = document.querySelector('#reset-expenses-modal-close');
    const resetExpensesCancel = document.querySelector('#reset-expenses-modal-cancel');

    resetExpensesButton.addEventListener('click', function() {
        ModalBody.forEach(ModalBody => {
            ModalBody.classList.remove('active');
        })
        resetExpensesModal.style.display = 'flex';
    })
    
    resetExpensesClose.addEventListener('click', function() {
        ModalBody.forEach(ModalBody => {
            ModalBody.classList.add('active');
        })
        
        resetExpensesModal.addEventListener('animationend', function() {
            resetExpensesModal.style.display = 'none';
        })
    })
    
    resetExpensesCancel.addEventListener('click', function() {
        ModalBody.forEach(ModalBody => {
            ModalBody.classList.add('active');
        })
        
        resetExpensesModal.addEventListener('animationend', function() {
            ModalBody.forEach(ModalBody => {
                if (ModalBody.classList.contains('active')) {
                    resetExpensesModal.style.display = 'none';
                }
            })        })
    })
    
    window.addEventListener('click', function(event) {
        if (event.target == resetExpensesModal) {
            resetExpensesModal.style.display = 'none';
        }
    })
    
})