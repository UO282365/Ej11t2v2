class Ejercicio11 {
    constructor() {
        navigator.geolocation.getCurrentPosition(this.previo.bind(this),this.verErrores.bind(this));
        this.mostrado = false;
    }

    previo(p){
        this.posicion = p;
    }

    mostrar() {
        if (!this.mostrado) {
            this.longitud = this.posicion.coords.longitude;
            this.latitud = this.posicion.coords.latitude;
            this.precision = this.posicion.coords.accuracy;
            this.altitud = this.posicion.coords.altitude;
            this.precisionAltitud = this.posicion.coords.altitudeAccuracy;
            this.rumbo = this.posicion.coords.heading;
            this.velocidad = this.posicion.coords.speed;

            var datos = "<p>longitud : " + this.longitud + "</p>";
            datos += "<p>latitud : " + this.latitud + "</p>";
            datos += "<p>precision: " + this.precision + "</p>";
            datos += "<p>altitud: " + this.altitud + "</p>";
            datos += "<p>precisionAltitud: " + this.precisionAltitud + "</p>";
            datos += "<p>rumbo: " + this.rumbo + "</p>";
            datos += "<p>velocidad: " + this.velocidad + "</p>";
            $(datos).appendTo("main");
            this.mostrado = true;
        }

    }

    verErrores(error){
        switch(error.code) {
        case error.PERMISSION_DENIED:
            this.mensaje = "<p>El usuario no permite la petición de geolocalización</p>"
            break;
        case error.POSITION_UNAVAILABLE:
            this.mensaje = "<p>Información de geolocalización no disponible</p>"
            break;
        case error.TIMEOUT:
            this.mensaje = "<p>La petición de geolocalización ha caducado</p>"
            break;
        case error.UNKNOWN_ERROR:
            this.mensaje = "<p>Se ha producido un error desconocido</p>"
            break;
        }
        $(this.mensaje).appendTo("main");
        this.mostrado=true;
    }

}
var ej11 = new Ejercicio11();