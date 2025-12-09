// script.js actualizado: recomendaciones más tranquilas/realistas para escuela pública
document.addEventListener('DOMContentLoaded', () => {
  const calcBtn = document.getElementById('calc-btn');
  const interest = document.getElementById('interest');
  const calcResult = document.getElementById('calc-result');

  if (calcBtn && interest && calcResult) {
    calcBtn.addEventListener('click', () => {
      const val = interest.value;
      let html = '';

      // Recomendaciones con tono más calmado y accesible para contexto de escuela pública
      switch (val) {
        case 'emprender':
          html = '<strong>Recomendaciones (emprender con calma):</strong> Empieza con proyectos pequeños y prácticos en tu comunidad o escuela. Trabaja en equipo, busca mentoría dentro de la misma institución y participa en ferias escolares. Prioriza aprender a comunicar tu idea y validar soluciones simples (MVP básico). Las incubadoras y concursos locales pueden ser una buena puerta de entrada, sin prisas.';
          break;
        case 'universidad':
          html = '<strong>Recomendaciones (preparación para la universidad):</strong> Refuerza materias clave paso a paso: matemáticas básicas, razonamiento lógico y comunicación escrita. Aprovecha proyectos escolares para construir un portafolio sencillo y pide orientación vocacional en la escuela. Realiza cursos cortos gratuitos o talleres para fortalecer áreas específicas antes de elegir carrera.';
          break;
        case 'empleo':
          html = '<strong>Recomendaciones (buscar empleo):</strong> Enfócate en roles de apoyo y aprendiz (prácticas, asistente de datos, soporte técnico). Haz cursos cortos y certificados accesibles, documenta pequeños proyectos escolares y usa convenios de la escuela para buscar primeras experiencias. Un currículum modesto con ejemplos concretos vale más que exagerar habilidades.';
          break;
        case 'investigacion':
          html = '<strong>Recomendaciones (investigar / competencias):</strong> Participa en clubes de ciencia y equipos de proyecto; empieza con preguntas simples y experimentos guiados. Busca apoyo de profesores para diseñar trabajos pequeños y participa en competencias locales o ferias científicas. La investigación en la preparatoria avanza mejor con constancia y guía.';
          break;
        default:
          html = 'Selecciona una opción para ver recomendaciones prácticas y accesibles.';
      }

      calcResult.innerHTML = html;
      calcResult.focus?.(); // intentar dar foco para lectores de pantalla
    });
  }

  // Validación de formulario simulada — sólo si existe el formulario en la página
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!feedback) return;
      const name = form.name?.value?.trim();
      const email = form.email?.value?.trim();
      const grade = form.grade?.value;

      if (!name || !email || !grade) {
        feedback.style.color = 'var(--danger)';
        feedback.textContent = 'Por favor completa los campos requeridos.';
        return;
      }

      feedback.style.color = 'var(--success)';
      feedback.textContent = 'Solicitud recibida. Gracias — te contactaremos cuando sea posible.';
      form.reset();
    });
  }

  // Imprimir / generar PDF mediante diálogo del navegador (si existe botón)
  const downloadBtn = document.getElementById('download-brochure');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Conteo simple de pros y contras (si existen listas)
  const prosCount = document.querySelectorAll('#pros-list li').length;
  const contrasCount = document.querySelectorAll('#contras-list li').length;
  if (prosCount > 0) {
    const prosHeader = document.querySelector('#pros-list')?.previousElementSibling;
    if (prosHeader) prosHeader.innerHTML = prosHeader.innerHTML.replace(/\s*\(\d+\)$/, '') + ` <span class="muted">(${prosCount})</span>`;
  }
  if (contrasCount > 0) {
    const contrasHeader = document.querySelector('#contras-list')?.previousElementSibling;
    if (contrasHeader) contrasHeader.innerHTML = contrasHeader.innerHTML.replace(/\s*\(\d+\)$/, '') + ` <span class="muted">(${contrasCount})</span>`;
  }

  // Mejora de accesibilidad: manejar Enter en enlaces y botones (si existen)
  document.querySelectorAll('button, a, input, select, textarea').forEach(el => {
    el.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' && el.tagName === 'A') {
        el.click();
      }
    });
  });
});