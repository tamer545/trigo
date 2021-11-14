// Getters for things that are calculated the same way

export function getAngleGamma(angleAlpha, angleBeta) {
    return 180 - angleAlpha - angleBeta
}

export function getSeiteCWithSineLaw(angleAlpha, angleGamma) {
    return (angleAlpha / Math.sin(angleAlpha)) * Math.sin(angleGamma)
}

export function getAngleBeta(angleAlpha, angleGamma) {
    return 180 - angleAlpha - angleGamma
}

export function getAngleBetaWithArcsine(angleAlpha, seiteB) {
return Math.asin((Math.sin(angleAlpha) / angleAlpha) * seiteB)
}

export function getSeiteBWithSineLaw(angleAlpha, angleBeta) {
    return (angleAlpha / Math.sin(angleAlpha)) * Math.sin(angleBeta)
}

export function getAngleAlpha(angleGamma, angleBeta) {
    return 180 - angleGamma - angleBeta
}

export function getSeiteAWithSineLaw(seiteB, angleBeta, angleAlpha) {
    return (seiteB / Math.sin(angleBeta)) * Math.sin(angleAlpha)
}