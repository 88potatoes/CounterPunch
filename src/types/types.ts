export interface Match {
    id: number,
    title: string,
    datetime: string,
    fighter1: Fighter,
    fighter2: Fighter,
    scores: {
        fighter1: FighterScore,
        fighter2: FighterScore
    }
}

export interface Fighter {
    id: number, 
    name: string,
    country: string,
    avatarURL: string
}

export interface FighterScore {
    thrown: number,
    hits: number
}

export interface PrimitiveMatch {
    title: string,
    datetime: string,
    fighter1: {
        id: number
    },
    fighter2: {
        id: number
    }
}