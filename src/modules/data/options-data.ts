export const SYMBOLS: { [key: string]: string } = {
    aud_usd: "AUD/USD",
    eur_czk: "EUR/CZK",
    usd_cad: "USD/CAD"
}

export const ORDER_TYPE: { [key: string]: string } = {
    limit: "LIMIT",
    stop_market: "STOP_MARKET",
    oco: "OCO",
    iceberg: "ICEBERG"
}

export const ORDER_LIFETIME: { [key: string]: string } = {
    gtc: "GTC",
    gtt: "GTT",
    session: "SESSION"
}