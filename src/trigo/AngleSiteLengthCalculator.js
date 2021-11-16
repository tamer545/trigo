import {
    getAngleGamma,
    getSeiteCWithSineLaw,
    getAngleBeta,
    getSeiteBWithSineLaw,
    getAngleBetaWithArcsine,
    getAngleAlpha,
    getSeiteAWithSineLaw,
} from "./GlobalCalculator";

function SSS(seiteA, seiteB, seiteC) {
    const angleAlpha = Math.acos((Math.pow(seiteA, 2) - Math.pow(seiteB, 2) - Math.pow(seiteC, 2)) / (-2 * seiteB * seiteC))
    const angleBeta = getAngleBetaWithArcsine(angleAlpha, seiteB);
    const angleGamma = getAngleGamma(angleAlpha, angleBeta)
}

function calculateABAlpha(seiteA, seiteB, angleAlpha) {
    // Gegeben Seite a, Seite b und Winkel Alpha
    const angleBeta = getAngleBetaWithArcsine(angleAlpha, seiteB);
    const angleGamma = getAngleGamma(angleAlpha, angleBeta);
    const seiteC = getSeiteCWithSineLaw(angleAlpha, angleGamma);
}

function calculateABBeta(seiteA, seiteB, angleBeta) {
    // Gegeben Seite a, Seite b und Winkel Beta
    const angleAlpha = Math.asin((Math.sin(angleBeta) / seiteB) * seiteA);
    const angleGamma = getAngleGamma(angleAlpha, angleBeta);
    const seiteC = getSeiteCWithSineLaw(angleAlpha, angleGamma);
}

function calculateACAlpha(seiteA, seiteC, angleAlpha) {
    // Gegeben Seite a, Seite c, Winkel Alpha
    const angleGamma = Math.asin((Math.sin(angleAlpha) / seiteA) * seiteC);
    const angleBeta = getAngleBeta(angleAlpha, angleGamma);
    const seiteB = getSeiteBWithSineLaw(angleAlpha, angleBeta);
}

function calculateBCBeta(seiteB, seiteC, angleBeta) {
    // Gegeben Seite B, Seite C, Winkel Beta
    const angleGamma = Math.asin((Math.sin(angleBeta) / seiteB) * seiteC);
    const angleAlpha = getAngleAlpha(angleBeta, angleGamma);
    const seiteA = getSeiteAWithSineLaw(seiteB, angleBeta, angleAlpha);
}

function calculateBCGamma(seiteB, seiteC, angleGamma) {
    const angleBeta = Math.asin((Math.sin(angleGamma) / seiteC) * seiteB);
    const angleAlpha = getAngleAlpha(angleGamma, angleBeta);
    const seiteA = getSeiteAWithSineLaw(seiteB, angleBeta, angleAlpha);
}

function calculateABGamma(seiteA, seiteB, angleGamma) {
    // Gegeben Seite a, Seite b und Winkel Gamma
    const seiteC = Math.sqrt(
        Math.pow(seiteA, 2) +
        Math.pow(seiteB, 2) -
        2 * seiteA * seiteB * Math.cos(angleGamma)
    );
    const angleAlpha = Math.asin((Math.sin(angleGamma) / seiteC) * seiteA);
    const angleBeta = getAngleBeta(angleAlpha, angleGamma);
}

function calculateACBeta(seiteA, seiteC, angleBeta) {
    // Gegeben Seite a, Seite c, Winkel Beta
    const seiteB = Math.sqrt(
        Math.pow(seiteA, 2) +
        Math.pow(seiteC, 2) -
        2 * seiteA * seiteC * Math.cos(angleBeta)
    );
    const angleAlpha = Math.acos(
        (Math.pow(seiteA, 2) - Math.pow(seiteB, 2) - Math.pow(seiteC, 2)) /
        (-2 * seiteB * seiteC)
    );
    const angleGamma = getAngleGamma(angleAlpha, angleBeta);
}

function calculateBCAlpha(seiteB, seiteC, angleAlpha) {
    // Gegeben Seite B, Seite C, angleAlpha
    const seiteA = Math.sqrt(
        Math.pow(seiteB, 2) -
        Math.pow(seiteC, 2) -
        2 * seiteB * seiteC * Math.cos(angleAlpha)
    );
    const angleBeta = getAngleBetaWithArcsine(angleAlpha, seiteB);
    const angleGamma = getAngleGamma(angleAlpha, angleBeta);
}

function calculateAAlphaGamma(seiteA, angleAlpha, angleGamma) {
    // Gegeben Seite a, Winkel Alpha, Winkel Gamma
    const angleBeta = getAngleBeta(angleAlpha, angleGamma);
    const seiteB = getSeiteBWithSineLaw(angleAlpha, angleBeta);
    const seiteC = getSeiteCWithSineLaw(angleBeta, angleGamma);
}

function calculateAAlphaBeta(seiteA, angleAlpha, angleBeta) {
    // Gegeben Seite a, Winkel Alpha, Winkel Beta (https://www.matheretter.de/wiki/dreieck-berechnen-awawb)
    const angleGamma = getAngleGamma(angleAlpha, angleBeta);
    const seiteB = getSeiteBWithSineLaw(angleAlpha, angleBeta);
    const seiteC = getSeiteCWithSineLaw(angleAlpha, angleGamma);
}

function calculateBAlphaBeta(seiteB, angleAlpha, angleBeta) {
    // Gegeben Seite b, Winkel Alpha, Winkel Beta
    const angleGamma = getAngleGamma(angleAlpha, angleBeta);
    const seiteA = getSeiteAWithSineLaw(seiteB, angleBeta, angleAlpha);
    const seiteC = getSeiteCWithSineLaw(angleAlpha, angleGamma);
}

function calculateBBetaGamma(seiteB, angleBeta, angleGamma) {
    const angleAlpha = getAngleAlpha(angleGamma, angleBeta);
    const seiteA = getSeiteAWithSineLaw(seiteB, angleBeta, angleAlpha)
    const seiteC = getSeiteCWithSineLaw(angleAlpha, angleGamma)
}

function calculateWWS(seiteC, angleAlpha, angleBeta) {
    const angleGamma = getAngleGamma(angleAlpha, angleBeta);
    const seiteA = getSeiteCWithSineLaw(angleAlpha, angleGamma)
    const seiteB = getSeiteBWithSineLaw(angleAlpha, angleBeta)
}

function calculateCAlphaGamma(seiteC, angleAlpha, angleGamma) {
    const angleBeta = getAngleBeta(angleAlpha, angleGamma);
    const seiteB = getSeiteBWithSineLaw(angleAlpha, angleBeta)
    const seiteA = getSeiteAWithSineLaw(seiteB, angleBeta, angleAlpha)
}

function calculateCBetaGamma(seiteC, angleBeta, angleGamma) {
    const angleAlpha = getAngleAlpha(angleGamma, angleBeta);
    const seiteB = getSeiteBWithSineLaw(angleAlpha, angleBeta)
    const seiteA = getSeiteAWithSineLaw(seiteB, angleBeta, angleAlpha)
}

function calculateSWW(seiteA, angleBeta, angleGamma) {
    // Gegeben Seitea, Winkel Beta, Winkel Gamma
    const angleAlpha = getAngleAlpha(angleGamma, angleBeta);
    const seiteB = getSeiteBWithSineLaw(angleAlpha, angleBeta);
    const seiteC = getSeiteCWithSineLaw(angleAlpha, angleGamma);
}

function calculateWSW(seiteB, angleAlpha, angleGamma) {
    // Gegeben SeiteB, Winkel Alpha, Winkel Gamma
    const angleBeta = getAngleBeta(angleAlpha, angleBeta);
    const seiteA = getSeiteAWithSine(seiteB, angleBeta, angleAlpha);
    const seiteC = getSeiteCWithSineLaw(angleAlpha, angleGamma);
}
