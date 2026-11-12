
/*
  QUIZLIVE - BANCO DE PREGUNTAS
  Cada pregunta contiene:
  1. Enunciado
  2. Cuatro respuestas (A, B, C y D)
  3. Respuesta correcta
  4. Fundamentación legal

  Para agregar temas nuevos, utilizar agregarTema()
  al final de este archivo.
*/

window.QUIZ_TOPICS = {};
window.QUIZ_QUESTIONS = {};

function agregarTema(id, nombre, preguntas) {
  if (!id || !Array.isArray(preguntas)) {
    throw new Error("Tema inválido");
  }

  preguntas.forEach((p, i) => {
    if (
      typeof p.question !== "string" ||
      !Array.isArray(p.answers) ||
      p.answers.length !== 4 ||
      !Number.isInteger(p.correct) ||
      p.correct < 0 ||
      p.correct > 3
    ) {
      throw new Error(`Pregunta inválida: ${id} #${i + 1}`);
    }
  });

  window.QUIZ_TOPICS[id] = { label: nombre };

  window.QUIZ_QUESTIONS[id] = preguntas.map(p => ({
    question: p.question,
    answers: p.answers,
    correct: p.correct,
    explanationCorrect: "Fundamento legal: " + p.fundamento,
    explanationWrong:
      "Respuesta correcta: opción " +
      "ABCD"[p.correct] +
      ". Fundamento legal: " +
      p.fundamento
  }));
}

// TEMA 1: LICENCIA Y PLAZOS

agregarTema("tema1", "📋 Licencia y Plazos", [
  {
    question: "¿Un trabajador lesionado en la vía pública por su propia negligencia (ej. cruzar distraído mirando el celular) pierde el derecho a la licencia paga por enfermedad inculpable (Art. 208 LCT)?",
    answers: [
      "Sí, la negligencia grave del trabajador extingue la obligación patronal de pago.",
      "No, el régimen cubre imprudencia o negligencia (culpa grave); el único límite legal es el dolo.",
      "Sí, salvo que el accidente ocurra estrictamente durante la jornada de trabajo.",
      "No, pero la ley reduce automáticamente su remuneración al 50% durante el reposo."
    ],
    correct: 1,
    fundamento: "El régimen de enfermedades inculpables responde incluso ante culpa o culpa grave del trabajador (imprudencia o negligencia). El derecho a cobro únicamente cesa si se prueba dolo (provocación intencional de la lesión o fraude)."
  },
  {
    question: "Un empleado con 4 años y 11 meses de antigüedad cae enfermo por un tratamiento de 3 meses. Durante el transcurso de la licencia cumple los 5 años en la empresa. ¿Cuál es su tope máximo de licencia paga (sin cargas de familia)?",
    answers: [
      "3 meses, porque la antigüedad se congela de forma inamovible al inicio del hecho generador.",
      "6 meses, pues la remuneración se devenga día a día y al superar los 5 años se amplía el tope legal.",
      "12 meses, por aplicación directa del principio de la duda más favorable al trabajador.",
      "Pierde la licencia paga de inmediato debiendo pasar a reserva de puesto."
    ],
    correct: 1,
    fundamento: "Como la licencia se devenga día a día, si el trabajador alcanza los 5 años de antigüedad durante su transcurso, el plazo máximo legal se amplía de 3 a 6 meses de conformidad con el Art. 208 LCT y los principios de equidad y favorabilidad."
  },
  {
    question: "A los efectos de duplicar los plazos máximos de licencia paga del Artículo 208 LCT, ¿se considera el 'hijo por nacer' como carga de familia?",
    answers: [
      "No, la carga de familia requiere el nacimiento con vida y la inscripción en el registro civil.",
      "Sí, la jurisprudencia considera el embarazo de la trabajadora o de su pareja como carga de familia.",
      "Solo si el empleador otorga una conformidad previa emitida expresamente por escrito.",
      "Únicamente en contratos de trabajo que superen los 10 años de antigüedad acumulada."
    ],
    correct: 1,
    fundamento: "La jurisprudencia mayoritaria aplica de forma amplia el concepto de familia (Art. 11 LCT y principios de protección), determinando que la condición de embarazo (hijo por nacer) constituye carga de familia y duplica los plazos de licencia."
  },
  {
    question: "¿Qué ocurre con el plazo máximo de licencia paga si un trabajador sufre dos accidentes inculpables totalmente distintos e independientes con un mes de diferencia?",
    answers: [
      "Se agotan y acumulan dentro del mismo tope anual único prefijado por el empleador.",
      "Se reinicia el cómputo del plazo máximo por tratarse de afecciones totalmente independientes.",
      "Pasa automáticamente a la reserva de puesto de trabajo sin goce de sueldo por 1 año.",
      "El segundo evento debe ser derivado y cubierto obligatoriamente por la ART."
    ],
    correct: 1,
    fundamento: "El tope del Art. 208 LCT (3, 6 u 12 meses) se otorga por 'cada enfermedad o accidente'. Si ocurre un nuevo evento independiente y no relacionado, se reinicia un nuevo período máximo de licencia paga."
  },
  {
    question: "En el caso de recidivas de enfermedades crónicas, ¿cuándo se reinicia el plazo máximo de licencia remunerada según el Art. 208 LCT?",
    answers: [
      "A los 6 meses exactos contados desde el primer diagnóstico médico.",
      "Transcurridos 2 años desde la manifestación de la patología.",
      "Se reinicia de forma automática cada 1° de enero del año calendario.",
      "Nunca; las patologías crónicas solo otorgan un único plazo en toda la vida laboral."
    ],
    correct: 1,
    fundamento: "Las recaídas o recidivas de una misma enfermedad crónica no se consideran una nueva enfermedad, salvo que se manifiesten transcurridos 2 años desde la manifestación previa (Art. 208 LCT)."
  }
]);

// TEMA 2: AVISOS Y CERTIFICADOS

agregarTema("tema2", "📝 Avisos y Certificados", [
  {
    question: "Bajo el Artículo 209 de la LCT, ¿en qué plazo debe el trabajador notificar su enfermedad o accidente e indicar el lugar exacto en que se encuentra?",
    answers: [
      "Dentro de las 48 horas posteriores a la presentación del primer síntoma.",
      "En el transcurso de la primera jornada de trabajo respecto de la cual esté imposibilitado de concurrir.",
      "Al finalizar la semana laboral en la que se produjeron las inasistencias.",
      "En el momento en que se emita el certificado médico definitivo por el profesional."
    ],
    correct: 1,
    fundamento: "El Art. 209 exige dar aviso en la primera jornada de trabajo a la que no pueda asistir, informando el lugar de reposo para permitir el control médico patronal (Art. 210)."
  },
  {
    question: "Tras la Reforma de Modernización Laboral (Ley 27.802 de 2026), ¿qué debe acreditar el trabajador si omitió dar aviso a tiempo para no perder el salario?",
    answers: [
      "Una declaración jurada ratificada ante escribano público y sindicato.",
      "Inequívocamente la imposibilidad de dar aviso dada la fuerza mayor o gravedad del caso.",
      "El consentimiento verbal previo otorgado por el delegado del sector.",
      "Nada; la omisión de aviso nunca genera la pérdida del derecho al cobro del salario."
    ],
    correct: 1,
    fundamento: "La Ley 27.802 especificó que la pérdida del salario por falta de aviso solo se excepciona si la enfermedad/accidente y la imposibilidad de avisar (fuerza mayor/gravedad) resultan 'inequívocamente acreditadas' por el trabajador."
  },
  {
    question: "Si un trabajador sufre una enfermedad inculpable durante sus vacaciones anuales y notifica fehacientemente al empleador en tiempo y forma, ¿qué sucede?",
    answers: [
      "Las vacaciones continúan transcurriendo normalmente hasta consumirse por completo.",
      "Se interrumpen las vacaciones, cobrando licencia por enfermedad y reservando los días no gozados.",
      "Se extinguen definitivamente los días de vacaciones que restaban por gozar.",
      "El contrato se rescinde inmediatamente por imposibilidad objetiva de cumplimiento."
    ],
    correct: 1,
    fundamento: "El aviso oportuno por enfermedad durante el receso interrumpe las vacaciones. El trabajador pasa a cobrar la licencia paga del Art. 208 y conserva los días de vacaciones pendientes para reprogramarlos (Art. 154 LCT)."
  },
  {
    question: "Si existe discrepancia entre el médico del trabajador y el médico de control del empleador (Art. 210 LCT), ¿es obligatoria la junta médica?",
    answers: [
      "Sí, es un trámite administrativo obligatorio previo a cualquier reclamo judicial.",
      "No; la ley indica que 'se podrá recurrir', siendo un medio probatorio optativo sujeto a la sana crítica judicial.",
      "Sí, y el dictamen resultante es vinculante e inimpugnable para el juez laboral.",
      "No; la opinión del médico de la empresa prevalece automáticamente sin excepción."
    ],
    correct: 1,
    fundamento: "La norma modificada por la Ley 27.802 establece que ante discrepancia 'se podrá recurrir' a junta médica o dictamen institucional. Es optativo y su resultado es una prueba más a evaluar por el juez."
  },
  {
    question: "Conforme a la Reforma 2026 (Ley 27.802), ¿cuál de los siguientes requisitos NO forma parte de la validez del certificado médico?",
    answers: [
      "Firma digital emitida a través de plataformas electrónicas autorizadas (Ley 27.553).",
      "Inclusión explícita del diagnóstico médico, tratamiento y días de reposo indicados.",
      "Homologación y visado previo obligatorio por la SRT y el Ministerio de Trabajo.",
      "Emisión por profesional médico habilitado en el territorio nacional."
    ],
    correct: 2,
    fundamento: "La Ley 27.802 exige diagnóstico, tratamiento, días de reposo, firma digital (Ley 27.553) y médico habilitado. NO exige visado ni homologación del Ministerio de Trabajo o SRT."
  }
]);

// TEMA 3: RESERVA E INCAPACIDAD

agregarTema("tema3", "🏥 Reserva e Incapacidad", [
  {
    question: "Bajo la Ley de Protección de Datos Personales (Ley 25.326), ¿está el trabajador obligado a detallar su diagnóstico médico en el telegrama de aviso laboral?",
    answers: [
      "Sí, la omisión del diagnóstico en el telegrama invalida jurídicamente la notificación.",
      "No; el diagnóstico es un dato sensible resguardado por el secreto profesional ante el médico de control.",
      "Solo si la empresa cuenta con un plantel superior a 100 empleados registrados.",
      "Sí, salvo que se trate de afecciones respiratorias o virales menores."
    ],
    correct: 1,
    fundamento: "Los datos de salud son 'datos sensibles' (Ley 25.326). El trabajador no está obligado a revelar públicamente su diagnóstico en el telegrama; este debe ser verificado por el médico de control bajo secreto profesional."
  },
  {
    question: "Durante el período de reserva de puesto de trabajo (Art. 211 LCT), ¿cuál es la situación del trabajador respecto de la remuneración y la obra social?",
    answers: [
      "Percibe el 50% de la remuneración habitual y mantiene la cobertura de la obra social.",
      "No percibe salario, pero conserva la cobertura de la obra social.",
      "Cobra el 100% del sueldo pero pierde de inmediato la afiliación a la obra social.",
      "No percibe salario ni conserva ningún beneficio o cobertura médica."
    ],
    correct: 1,
    fundamento: "La reserva de puesto (1 año tras agotar la licencia paga) suspende el pago de salarios, pero mantiene vigente el contrato de trabajo y los beneficios de la obra social (Art. 211 LCT)."
  },
  {
    question: "¿Cómo opera la extinción del contrato de trabajo una vez vencido el año de reserva de puesto (Art. 211 LCT)?",
    answers: [
      "Se extingue automáticamente de pleno derecho al cumplirse el día 365 sin aviso.",
      "Requiere que alguna de las partes rescinda expresamente notificando a la otra; no genera indemnización.",
      "Obliga al empleador a abonar la indemnización por despido incausado del Art. 245 LCT.",
      "Exige dictamen previo firme expedido por la Comisión Médica Previsional."
    ],
    correct: 1,
    fundamento: "Vencido el año de reserva de puesto, el contrato subsiste hasta que cualquiera de las partes decida y notifique la voluntad de rescindirlo. Dicha extinción exime de responsabilidad indemnizatoria."
  },
  {
    question: "Si el trabajador queda con una incapacidad parcial definitiva y el empleador demuestra objetivamente que NO tiene tareas livianas compatibles, ¿qué indemnización corresponde?",
    answers: [
      "Ninguna, el vínculo se disuelve sin compensación por fuerza mayor objetiva.",
      "La indemnización reducida del Artículo 247 LCT (50% de la indemnización por despido).",
      "La indemnización duplicada del Artículo 245 bis por despido discriminatorio.",
      "La indemnización completa del Artículo 245 LCT más dos años de salarios caídos."
    ],
    correct: 1,
    fundamento: "Si el empleador demuestra que no puede asignar tareas acordes por causas que no le son imputables, el contrato se extingue abonando la indemnización reducida del Art. 247 LCT (Art. 212 2° párrafo)."
  },
  {
    question: "Si un empleador alega falsamente no tener tareas livianas para desvincular a un trabajador con incapacidad parcial, ¿qué consecuencia jurídica enfrenta?",
    answers: [
      "Queda eximido abonando únicamente la indemnización reducida del Art. 247 LCT.",
      "Deberá pagar la indemnización plena del Art. 245 LCT y eventualmente indemnización por despido discriminatorio.",
      "Sufre únicamente una apercibimiento administrativo del Ministerio de Trabajo.",
      "El contrato se convierte en un plazo fijo suspendido indefinidamente."
    ],
    correct: 1,
    fundamento: "Si se prueba en juicio que el empleador disponía de tareas livianas y mintió para no asignarlas, se aplica el 3° párrafo del Art. 212 LCT (indemnización del Art. 245) y se activa la tutela contra el despido discriminatorio."
  }
]);

// TEMA 4: INDEMNIZACIONES

agregarTema("tema4", "💰 Indemnizaciones", [
  {
    question: "¿Cuándo se presume jurídicamente configurada la incapacidad absoluta que da lugar al pago del Art. 212 (4° párrafo) LCT?",
    answers: [
      "Cuando la invalidez produce una disminución en la capacidad laborativa del 66% o más.",
      "Solo cuando alcanza el 100% de incapacidad y requiere asistencia permanente de terceros.",
      "Cuando el trabajador cumple los 65 años de edad en el transcurso de la licencia.",
      "En cualquier enfermedad que requiera una inasistencia superior a los 90 días corridos."
    ],
    correct: 0,
    fundamento: "La doctrina laboral y previsional (Art. 48 Ley 24.241) presume que la incapacidad es total/absoluta cuando la disminución laborativa sea igual o superior al 66%."
  },
  {
    question: "Si la enfermedad o accidente inculpable deriva en incapacidad absoluta para el trabajador, ¿qué indemnización debe abonar el empleador según el Art. 212 LCT?",
    answers: [
      "La indemnización reducida equivalente al Artículo 247 LCT.",
      "Una indemnización de monto igual a la establecida en el Artículo 245 LCT.",
      "Ninguna, la prestación económica recae de forma exclusiva sobre la ANSES.",
      "Un subsidio mensual de salario mínimo vital y móvil durante 12 meses."
    ],
    correct: 1,
    fundamento: "El 4° párrafo del Art. 212 LCT dispone que ante incapacidad absoluta, el empleador debe abonar una indemnización equivalente a la del Art. 245 LCT. Este beneficio es acumulable con prestaciones de la seguridad social."
  },
  {
    question: "¿Qué dispone el Artículo 213 de la LCT si el empleador despide sin justa causa al trabajador durante la licencia paga por enfermedad inculpable?",
    answers: [
      "El despido es nulo de pleno derecho obligando a la reincorporación inmediata.",
      "Debe abonar las indemnizaciones por despido incausado MÁS los salarios del tiempo que faltare para el alta o vencimiento.",
      "Se aplica una reducción del 50% en las indemnizaciones por rescisión anticipada.",
      "Solo se abona el preaviso y la integración del mes de despido."
    ],
    correct: 1,
    fundamento: "El Art. 213 LCT establece la sanción por despido en período de licencia paga: el empleador debe pagar las indemnizaciones por despido incausado completas MÁS los salarios caídos hasta el alta médica o el fin de la licencia."
  },
  {
    question: "Para liquidar los salarios de licencia por enfermedad de un trabajador con remuneraciones variables (ej. comisiones), ¿qué norma fija el Art. 208 LCT?",
    answers: [
      "Se toma únicamente la comisión obtenida en el último mes trabajado.",
      "Se calcula un promedio de lo percibido en el último semestre (últimos 6 meses).",
      "Se abona exclusivamente el sueldo básico de convenio sin adicionales.",
      "Se toma la comisión más alta de los últimos 2 años sin promediar."
    ],
    correct: 1,
    fundamento: "El Art. 208 LCT establece que las remuneraciones variables se liquidarán según el promedio de lo percibido en el último semestre de prestación de servicios."
  },
  {
    question: "Si un trabajador se encuentra cumpliendo una suspensión disciplinaria o económica y sobreviene una enfermedad inculpable, ¿qué ocurre con el cobro salarial?",
    answers: [
      "La enfermedad suspende la sanción/medida y el trabajador recupera el derecho a percibir remuneración.",
      "Mantiene la suspensión sin goce de sueldo hasta que venza el plazo disciplinario.",
      "El contrato se rescinde por injuria laboral concurrente.",
      "Se reducen automáticamente a la mitad los plazos máximos de licencia paga."
    ],
    correct: 0,
    fundamento: "El último párrafo del Art. 208 LCT establece que las suspensiones por causas económicas o disciplinarias no afectan el derecho a cobrar salarios por enfermedad, prevaleciendo el derecho a la remuneración por la licencia médica."
  }
]);

console.log(
  "QuizLive: banco cargado,",
  Object.values(window.QUIZ_QUESTIONS)
    .reduce((total, preguntas) => total + preguntas.length, 0),
  "preguntas."
);
