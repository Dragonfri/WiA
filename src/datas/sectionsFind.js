export function findWifiByName(wifiArray, name) {
    return wifiArray.find(wifi => wifi.location === name);
}