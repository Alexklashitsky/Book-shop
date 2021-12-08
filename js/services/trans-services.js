var gTrans = {
    UNKNOWN: {
        en: 'UNKNOWN',
        he: 'לא הוגדר',
    },
    heder: {
        en: 'welcome to my book shop',
        he: 'ברוכים הבאים לחנות הספרים'
    },
    add: {
        en: 'Add anew book',
        he: 'הוסף ספר חדש'
    },
    id: {
        en: 'Id',
        he: 'מזהה'
    },
    title: {
        en: 'Title',
        he: 'שם הספר'
    },
    price: {
        en: 'Price',
        he: 'מחיר'
    },
    action: {
        en: 'Action',
        he: 'פעולת'
    },
    read: {
        en: 'Read',
        he: 'פרטים'
    },
    update: {
        en: 'Update',
        he: 'עדכן מחיר'
    },
    delete: {
        en: 'Delete',
        he: 'מחק'
    },
    cancel: {
        en: 'Close',
        he: 'סגור'

    },
    desc: {
        en: 'Description',
        he: 'תיאור'
    }
}

const DEFAULT_LANG = 'en'
var gCurrLang = DEFAULT_LANG;

function getTrans(transKey) {
    const tranLangsMap = gTrans[transKey]
    if (!tranLangsMap) return gTrans['UNKNOWN'][gCurrLang]
    const word = tranLangsMap[gCurrLang]
    if (!word) return tranLangsMap[DEFAULT_LANG]
    return word;
}

function doTrans() {

    var els = document.querySelectorAll('[data-trans]')
    console.log(els);
    els.forEach((el) => {
        const transKey = el.dataset.trans
        el.innerText = getTrans(transKey)
    })
}

function setLang(lang) {
    gCurrLang = lang;
}


function formatCurrency(num) {
    return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(num);
}

