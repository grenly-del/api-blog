class CustomError extends Error {
    status:number
    constructor(status:number, name:string,message:string) {
        super(message)
        this.name = name
        this.status = status
    }
}

export default CustomError