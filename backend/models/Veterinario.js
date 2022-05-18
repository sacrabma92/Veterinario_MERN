import mongosse, { mongo } from "mongoose";

const veterinarioSchema = mongosse.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  telefono: {
    type: String,
    default: null,
    trim: true,
  },
  web: {
    type: true,
    defalut: null,
  },
  token: {
    type: String,
  },
  confirmado: {
    type: Boolean,
    defalut: false,
  },
});

const Veterinario = mongosse.model("Veterinario", veterinarioSchema);

export default Veterinario;
