const mongoose = require('mongoose')

const invoicesSchema = mongoose.Schema(
    {
        InvoiceDate : {
            type :  Date,
            require : (true, "Please enter the date"),
        },
        InvoiceNumber : {
            type : Number,
            require : (true, "Please enter the number"),
            default: 0
        },
        InvoiceAmount : {
            type : Number,
            require : (true, "Please enter the amount"),
            default: 0
        }

    }
)

const  Invoices = mongoose.model('Invoices', invoicesSchema)

module.export = Invoices;