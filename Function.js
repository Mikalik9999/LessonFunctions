function oneSum(q,w) { //Function Declaration
    return q + w;
}
console.log(oneSum(2,2));

const threeSum = function(q, w) { //Function Expression
    return q + w;
};
console.log(threeSum(2,2))

const arrowSum = (q, w) => q + w; //стрелочное сложение
console.log("Сложение = " + arrowSum(2,2));

function oneVch(q,w) { //Function Declaration
    return q - w;
}
console.log(oneVch(2,2));

const threeVch = function(q, w) { //Function Expression
    return q - w;
};
console.log(threeVch(2,2))

const arrowVch = (r, t) => r - t; //стрелочное вычитание
console.log("вычитание = " + arrowVch(2,2));

function oneYmn(q,w) { //Function Declaration
    return q * w;
}
console.log(oneYmn(2,2));

const threeYmn = function(q, w) { //Function Expression
    return q * w;
};
console.log(threeYmn(2,2))

const arrowYmn = (u, i) => { // стрелочное умножение
    return u * i;
}
console.log("Умножение = " + arrowYmn(2, 2));

function oneDel(q,w) { //Function Declaration
    return q / w;
}
console.log(oneDel(2,2));

const threeDel = function(q, w) { //Function Expression
    return q / w;
};
console.log(threeDel(2,2))

const arrowDel = (a, s) => a / s; // стрелочное деление
console.log("Деление = " + arrowDel(2, 2));

function oneOst(q,w) { //Function Declaration
    return q % w;
}
console.log(oneOst(3,2));

const threeOst = function(q, w) { //Function Expression
    return q % w;
};
console.log(threeOst(3,2))

const arrowOst = (h, j) => h % j; // стрелочная функция остатка
console.log("Остаток = " + arrowOst(3, 2) );

function oneBigOr(q,w) { //Function Declaration
    return q >= w;
}
console.log(oneBigOr(3,2));

const threeBigOr = function(q, w) { //Function Expression
    return q >= w;
};
console.log(threeBigOr(3,2))

const arrow123 = (o, l) => o >= l ? o : l; // с использованием return
console.log("Проверка выяснила , что " + arrow123(1,2) + ' Больше или равны');

function oneSmallOr(q,w) { //Function Declaration
    return q <= w;
}
console.log(oneSmallOr(1,2));

const threeSmallOr = function(q, w) { //Function Expression
    return q <= w;
};
console.log(threeSmallOr(1,2))

const arrowSmall123 = (o, l) => o <= l ? o : l; // с использованием return
console.log("Проверка выяснила , что " + arrowSmall123(1,2) + ' Меньше или равны');

function oneSmall(q,w) { //Function Declaration
    return q < w;
}
console.log(oneSmall(1,2));

const threeSmall = function(q, w) { //Function Expression
    return q < w;
};
console.log(threeSmall(1,2))

const arrowOnlySmall = (o, l) => o < l ? console.log(o) : o === l ? console.log("равны") : console.log(l);
console.log("Меньше");
arrowOnlySmall(5, 2);

function oneBig(q,w) { //Function Declaration
    return q > w;
}
console.log(oneBig(1,2));

const threeBig = function(q, w) { //Function Expression
    return q > w;
};
console.log(threeBig(1,2))

const arrowOnlyBig = (o, l) => o > l ? console.log(o) : o === l ? console.log("равны") : console.log(l);
console.log("Больше ");
arrowOnlyBig(5, 2);

function oneFam(q,w) { //Function Declaration
    return q === w;
}
console.log(oneFam(1,2));

const threeFam = function(q, w) { //Function Expression
    return q === w;
};
console.log(threeFam(1,2))

const arrowFamily = (z, x) => z===x ? console.log('равны') : console.log('не равны');
console.log("Равны или нет?");
arrowFamily(1, 2)

function oneNo(q,w) { //Function Declaration
    return q !== w;
}
console.log(oneNo(1,2));

const threeNo = function(q, w) { //Function Expression
    return q !== w;
};
console.log(threeNo(1,2))

const arrowNo = (o, l) => o !== l ? console.log("не равны") : console.log("равны");
console.log("Проверяем функцию не...");
arrowNo(1, 2)
