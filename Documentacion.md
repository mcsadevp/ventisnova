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


deploy
mcsaa@DESKTOP-A750UAK MINGW64 ~/Desktop/webventis/ventisnova (dev)
$ git checkout -b deploy
Switched to a new branch 'deploy'

mcsaa@DESKTOP-A750UAK MINGW64 ~/Desktop/webventis/ventisnova (deploy)
$ npm install -g firebase-tools

added 3 packages, and changed 630 packages in 2m

70 packages are looking for funding
  run `npm fund` for details

mcsaa@DESKTOP-A750UAK MINGW64 ~/Desktop/webventis/ventisnova (deploy)
$ firebase login
i  Firebase optionally collects CLI and Emulator Suite usage and error reporting information to help improve our products. Data is collected in accordance 
with Google's privacy policy (https://policies.google.com/privacy) and is not used to identify you.

? Allow Firebase to collect CLI and Emulator Suite usage and error reporting information? No

Visit this URL on this device to log in:
https://accounts.google.com/o/oauth2/auth?client_id=563584335869-fgrhgmd47bqnekij5i8b5pr03ho849e6.apps.googleusercontent.com&scope=email%20openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloudplatformprojects.readonly%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffirebase%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform&response_type=code&state=38984256&redirect_uri=http%3A%2F%2Flocalhost%3A9005

Waiting for authentication...


mcsaa@DESKTOP-A750UAK MINGW64 ~/Desktop/webventis/ventisnova (deploy)
$ firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  C:\Users\mcsaa\Desktop\webventis\ventisnova

? Are you ready to proceed? Yes
? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Hosting: Configure                                                                                                                          sting: Configure 
files for Firebase Hosting and (optionally) set up GitHub Action deploys

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: ventisnova-49c34 (Ventisnova)
i  Using project ventisnova-49c34 (Ventisnova)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? No
? Set up automatic builds and deploys with GitHub? No
+  Wrote build/404.html
+  Wrote build/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

+  Firebase initialization complete!

mcsaa@DESKTOP-A750UAK MINGW64 ~/Desktop/webventis/ventisnova (deploy)
$ npm run build

> ventisnova@0.0.0 build
> vite build

vite v5.4.2 building for production...
✓ 114 modules transformed.
dist/index.html                                                      0.47 kB │ gzip:   0.31 kB
dist/assets/Logo-b-VtRLWM.png                                       11.35 kB
dist/assets/onda2-XwYf3JGH.png                                      15.03 kB
dist/assets/image 10-fB4zydIg.png                                   57.27 kB
dist/assets/campaign-creators-qCi_MzVODoU-unsplash 1-Bn4M5kSe.png   84.19 kB
dist/assets/Mask group-34YFnJrY.png                                 95.74 kB
dist/assets/image 5-DraB5o2a.png                                   119.16 kB
dist/assets/image 6-BEba445p.png                                   169.31 kB
dist/assets/image 11-ClQbWSsq.png                                  199.00 kB
dist/assets/image 15-Bt-1cm_B.png                                  414.54 kB
dist/assets/bg-form6-Bjy81da9.jpg                                  473.57 kB
dist/assets/image 14-CMVScPAS.png                                  480.42 kB
dist/assets/image 13-CL0UVgPW.png                                  550.52 kB
dist/assets/page-form-D1qawJuO.png                                 633.59 kB
dist/assets/page-register-BQokZQ68.png                             899.58 kB
dist/assets/index-CnFpUr5K.css                                      19.79 kB │ gzip:   4.61 kB
dist/assets/index-B-KYLNPV.js                                      424.45 kB │ gzip: 107.88 kB
✓ built in 7.92s

mcsaa@DESKTOP-A750UAK MINGW64 ~/Desktop/webventis/ventisnova (deploy)
$ firebase deploy

=== Deploying to 'ventisnova-49c34'...

i  deploying hosting
i  hosting[ventisnova-49c34]: beginning deploy...
i  hosting[ventisnova-49c34]: found 17 files in build
+  hosting[ventisnova-49c34]: file upload complete
i  hosting[ventisnova-49c34]: finalizing version...
+  hosting[ventisnova-49c34]: version finalized
i  hosting[ventisnova-49c34]: releasing new version...
+  hosting[ventisnova-49c34]: release complete

+  Deploy complete!

Project Console: https://console.firebase.google.com/project/ventisnova-49c34/overview
Hosting URL: https://ventisnova-49c34.web.app