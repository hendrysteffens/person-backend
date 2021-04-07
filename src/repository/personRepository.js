'use strict';
var mongoose = require('mongoose')
var Person = require('../infra/db');


module.exports = new class PersonRepository {

    getAll() {
        return Person.find();
    }

    getById(id) {
        return Person.findById(id);
    }

    getByCpf(cpf) {
        return Person.find({'cpf' : cpf}, (err, person) => {
            if(err) {
                return handleError(err);
            } else {
                return person;
            }
        });
    }

    create(person) {
        return Person.create(person);
    }

    update(id, person) {

        const updatedperson = {
            cpf: person.cpf,
            creditCardData: person.creditCardData,
            lastCpfSearch: person.lastCpfSearch,
            financeMovimentation : person.financeMovimentation
        }

        return Person.findByIdAndUpdate(id, updatedperson, { new: true });
    }

    delete(id) {
        return Person.findByIdAndRemove(id);
    }

}