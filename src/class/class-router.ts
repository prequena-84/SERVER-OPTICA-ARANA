import express, { Router, Express } from 'express'

export default class ISR {
    constructor(){
    }

    Servidor():Express {
        return express() 
    }

    Router():Router {
        return Router()
    }
}