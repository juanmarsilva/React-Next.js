import mongoose, { Model, Schema } from "mongoose";
import { SmallPokemon } from '../interfaces/';

export interface IPokemon extends SmallPokemon {};

const pokemonSchema = new Schema({
    name: { type: String, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    stats: [
        {
            base_stat: { type: Number, required: true },
            name: { type: String, required: true },
        }
    ],
    types: [{ type: String, required: true }],
    sprites: { type: String, default: '' }
});

const PokemonModel: Model<IPokemon> = mongoose.models.Pokemon || mongoose.model( 'Pokemon', pokemonSchema );

export default PokemonModel;