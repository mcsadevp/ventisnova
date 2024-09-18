# Guía de Usuario para el AuthContext

## Descripción
El `AuthContext` es un módulo que proporciona un contexto de autenticación para gestionar el registro, inicio de sesión, cierre de sesión y restablecimiento de contraseña de usuarios en una aplicación React utilizando Firebase Authentication. Este contexto permite a los componentes acceder a la información del usuario y a las funciones de autenticación de manera eficiente.

## Estructura del Código

### Importaciones
El módulo importa las bibliotecas necesarias de React y Firebase para su funcionamiento:

``` javascript
import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../firebase/firebaseConfig";
import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
GoogleAuthProvider,
signInWithPopup,
signOut,
onAuthStateChanged,
sendPasswordResetEmail,
} from "firebase/auth";
```
### Contexto de Autenticación
Se crea un contexto para la autenticación que permite a los componentes acceder a la información del usuario y las funciones de autenticación:

```javascript 
export const authContext = createContext();
```

### Hook `useAuth`
Este hook personalizado permite a los componentes acceder al contexto de autenticación:

```javascript
export const useAuth = () => {
const context = useContext(authContext);
if (!context) {
console.error("Error creando el contexto de autenticación");
}
return context;
};
```
### Componente `AuthProvider`
El componente `AuthProvider` proporciona el contexto de autenticación a sus componentes hijos y gestiona el estado del usuario:

```javascript
export function AuthProvider({ children }) {
const [user, setUser] = useState(null);
...
}
```
#### Estado
- `user`: Almacena la información del usuario autenticado.

#### Efecto
Se utiliza un efecto para escuchar los cambios en el estado de autenticación del usuario:

```javascript
useEffect(() => {
const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
...
});
return () => unsubscribe();
}, []);
```
### Métodos de Autenticación

#### `register`
Registra un nuevo usuario con email y contraseña:

```javascript
const register = async (email, password) => {
...
};

- **Parámetros**:
  - `email`: El email del usuario.
  - `password`: La contraseña del usuario.
- **Errores**: Lanza un error si el registro falla.
```
#### `login`
Inicia sesión con email y contraseña:

javascript
const login = async (email, password) => {
...
};

- **Parámetros**:
  - `email`: El email del usuario.
  - `password`: La contraseña del usuario.
- **Errores**: Lanza un error si el inicio de sesión falla.

#### `loginWithGoogle`
Inicia sesión utilizando Google:

```javascript
const loginWithGoogle = async () => {
...
};
```
- **Errores**: Lanza un error si el inicio de sesión con Google falla.

#### `logout`
Cierra la sesión del usuario:

```avascript
const logout = async () => {
...
};
```
- **Errores**: Lanza un error si el cierre de sesión falla.

#### `handlePasswordReset`
Envía un correo electrónico para restablecer la contraseña:

```javascript
const handlePasswordReset = async (email) => {
...
};
```
- **Parámetros**:
  - `email`: El email del usuario.
- **Errores**: Lanza un error si el envío del correo falla.

### Retorno del Proveedor
El proveedor retorna las funciones de autenticación y el estado del usuario a los componentes hijos:

```javascript
return (
<authContext.Provider
value={{
register,
login,
loginWithGoogle,
logout,
handlePasswordReset,
user,
}}
>
{children}
</authContext.Provider>
);
```
## Conclusión
Esta guía proporciona una visión general del `AuthContext` y sus funcionalidades. Se recomienda a los desarrolladores internos familiarizarse con este módulo para implementar correctamente la autenticación en la aplicación.
