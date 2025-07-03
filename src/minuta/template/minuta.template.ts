type Minute =
    | "PUNTO DE CONTROL"
    | "INSPECCIONES"
    | "RECORRIDO";


export const getMinuta = (tipoDeMinuta: Minute): string => {
    const minutas = {
        puntoDeControl: `
SISTEMA NACIONAL DE GESTIÓN DEL RIESGO.\n
PROTECCIÓN CIVIL Y ADMINISTRACION DE DESASTRE MUNICIPIO COLINA ESTADO FALCON\n
NOVEDADES RELEVANTES.\n
Zoedan: Falcón\n
Redan: Occidente\n
Municipio: Colina.\n
Parroquia: La Vela.\n
sector: muelle, castillo, leon colina, sixto lovera.\n
Fecha: 16/04/2025\n
Hora: 09:00 HLV \n\n
Tipo de Evento: Activación de Puntos de Control Operativo Semana Santa 2025\n\n
Situación:\n
Por Instrucciones del Ciudadano Director de Protección Civil y Administración de Desastres del Municipio Colina Abg.Esp. Víctor Hernández, se activa los diferentes puntos de Control del operativo de Semana Santa 2025\n
COORDINADOR DE OPERACIONES\n 
OSPC I Daniel Morón ( Supervision de puntos de control en los diferentes balnearios)\n\n 
PUNTO CASTILLO\n
- OPC III Ivan Yanez\n
- Func Ing María González\n
- Voluntario \n\n
PUNTO MUELLE:\n
- OPC III Lcdo Edwin Miquilena\n
- OPC III Lcdo Rafael Betancourt\n
- Func Luis Perozo\n
-Voluntarios\n\n
PUNTO LEON COLINA\n
- Func Andrés Perozo\n
- Voluntario Marcelino Riera\n
- Voluntarios\n\n
PUNTO SIXTO LOVERA\n
- OPC III Gustavo Ramones\n
- Func Yoici Lugo\n
- Voluntarios\n\n
Observaciones:\n
✓ Sin ninguna novedad hasta los momentos\n
✓ Poca afluencia de bañistas\n\n
Estado del Tiempo:\n
Parcialmente Nublado\n\n 
Organismos Integrados:\n
Protección Civil Colina\n
Bomberos Forestales\n
IMPARQUES\n
Grupo de Rescate Carimar\n\n
Reporte Elaborado por:\n 
Func Ing María González\n\n
Estatus: Abierto\n\n
SOLO QUEREMOS SALVAR VIDA.\n\n
Redes Sociales:\n
Twitter: @PCFalconVe\n
Instagram: @PCFalconVe\n
Facebook: PCFalconVe\n
Telefono Institucional:\n
0268-2524449\n
#PrevenirEsLaClave\n
#SoloQueremosSalvarVidas\n
¡Que Viva Mi Gallo Pinto!\n\n
En Protección Civil Colina No Debe Haber Cabida Para Traidores.\n
`,
        inspecciones: `
SISTEMA NACIONAL DE GESTIÓN DEL RIESGO.\n
PROTECCIÓN CIVIL Y ADMINISTRACION DE DESASTRE MUNICIPIO COLINA ESTADO FALCONTES\n
NOVEDADES RELEVANTES.\n 
Redan occidente\n
Zoedan: Falcón\n
Municipio: Colina.\n 
Parroquia: La Vela\n
Sector: Colombia Norte\n 
Calle Rómulo Gallegos\n
Fecha: 14/04/2025\n
Hora: 11:35 HLV\n\n
Tipo de Evento:\n
Inspeccion de seguridad Industrial a local Bodega José Sánchez.\n\n
Situación:\n
por Instrucciones Emanadas por el ciudadano Director de Protección Civil y Administración de Desastres del Municipio Colina Abg. Esp. Víctor Hernández se dirige la funcionaria CPC II MSc. Laura Navarro a realizar inspección en seguridad industrial a local, Bodega José Sánchez el establecimiento cumple con las condiciones y normativas establecidas.\n\n
Sintesis:\n
Solicitud de inspección por parte del la Ciudadano:  José Sánchez a este local se le hizo recomendaciones las cuales fueron tomadas en cuenta y cumplen con lo  requerido.\n\n
Beneficiados:\n
Aproximado de 203 personas.\n\n
Recomendación:\n
Mantener las vías de escape siempre despejadas\n
Mantener los espacios donde se encuentran los equipos eléctricos ventilados, ya que los mismos pueden sobre calentarse.\n 
Desenchufar cualquier equipo al final de la jornada laboral para evitar incendios.\n
No sobrecargar los enchufes con varios equipos electrónicos\n
Mantener el orden y limpieza del local\n
Preparacián a los empleados que hacer en cuanto un incendio.\n\n
Organismo Integrados:\n
Proteccion Civil y Administracion de Desastre Municipio Colina.\n\n
Reporte Elaborado por:\n
CPC II Licda. Laura Navarro.\n\n
Estatus: Cerrado\n\n 
SOLO QUEREMOS SALVAR VIDAS\n\n
Redes Sociales:\n
Twitter: PCFalconVe\n
Instagram: PCFalconVe\n
Facebook: PCFalconVe\n
Telefono Institucional:\n 
0268-2524449\n
#PrevenirEsLaClave\n
#SoloQueremosSalvarVidas\n
#Que viva mi gallo pinto#\n\n
En Protección Civil Colina no debe haber cabida para traidores.\n
`,
        recorrido: `
SISTEMA NACIONAL DE GESTIÓN DEL RIESGO.\n
PROTECCIÓN CIVIL Y ADMINISTRACION DE DESASTRE MUNICIPIO COLINA ESTADO FALCONTES\n
NOVEDADES RELEVANTES.\n
Redan: Occidente\n
Zoedan: Falcón\n
Municipio: Colina.\n 
Parroquia: La Vela.\n
Fecha: Martes 25/03/2025\n
Hora: 15:00 HLV\n
Coordenadas: UTM: 438059.686E 1266768.521N 19P\n\n
Tipo de Evento:\n
Recorrido por casco histórico de la vela de coro\n\n
Situación:\n
Por Instrucciones del Ciudadano Director de Protección Civil y Administración de Desastres del Municipio Colina Abg.Esp. Víctor Hernández se dirige el personal de guardia OSPC-I Daniel Morón y Func. Yoici Lugo a realizar recorrido por casco histórico de la vela de coro con la finalidad de abordar cualquier situación de emergencia que pueda presentarse en la zona.\n\n
Observaciones:\n
✓ Sin ninguna novedad hasta los momentos\n
✓ Beneficiarios: ( 09) personas por los alrededores del casco historico de la vela de coro.\n\n
Estado del Tiempo: Despejado\n\n 
Organismo Integrados:\n
Proteccion Civil Colina.\n\n
Reporte Elaborado por:\n
Func. Yoici Lugo\n\n
Estatus: Cerrado\n\n 
SOLO QUEREMOS SALVAR VIDA.\n\n
Redes Sociales:\n
Twitter: @PCFalconVe\n
Instagram: @PCFalconVe\n
Facebook: PCFalconVe\n
Telefono Institucional:\n
0268-2524449\n
#PrevenirEsLaClave\n
#SoloQueremosSalvarVidas\n
¡Que Viva Mi Gallo Pinto!\n\n
En Protección Civil Colina No Debe Haber Cabida Para Traidores.\n
`
    };
    return minutas[tipoDeMinuta] || "tipo de minuta no encontrado";

};
const minutaDePuntoControl = getMinuta('PUNTO DE CONTROL');
const minutaInspeccciones = getMinuta('INSPECCIONES');
const mintaRecorrido = getMinuta('RECORRIDO');

console.log(minutaDePuntoControl);
console.log(minutaInspeccciones);
console.log(mintaRecorrido)
