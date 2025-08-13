// ========================================
// ARCHIVO JAVASCRIPT PRINCIPAL - ASTRO
// Funcionalidades interactivas del portafolio
// ========================================

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // NAVEGACIÓN ACTIVA
    // ========================================
    
    // Obtener la página actual
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    
    // Marcar el enlace activo
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Para la página de inicio
        if (currentPath === '/' && href === '/') {
            link.style.backgroundColor = 'var(--color-primary)';
            link.style.color = 'var(--color-light)';
        }
        // Para otras páginas
        else if (currentPath.includes(href) && href !== '/') {
            link.style.backgroundColor = 'var(--color-primary)';
            link.style.color = 'var(--color-light)';
        }
    });
    
    // ========================================
    // ANIMACIONES DE ENTRADA
    // ========================================
    
    // Función para animar elementos cuando entran en el viewport
    function animateOnScroll() {
        const elements = document.querySelectorAll('.project-card, .skill-item, .contact-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }
    
    // Ejecutar animaciones
    animateOnScroll();
    
    // ========================================
    // EFECTOS HOVER MEJORADOS
    // ========================================
    
    // Efectos para las tarjetas de proyectos
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // ========================================
    // SMOOTH SCROLLING
    // ========================================
    
    // Agregar scroll suave a enlaces internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ========================================
    // VALIDACIÓN DE FORMULARIO MEJORADA
    // ========================================
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        // Validación en tiempo real
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
        
        // Envío del formulario
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                // Simular envío
                showSuccessMessage();
                this.reset();
            }
        });
    }
    
    // ========================================
    // FUNCIONES AUXILIARES
    // ========================================
    
    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        
        clearFieldError(field);
        
        switch(fieldName) {
            case 'name':
                if (value.length < 2) {
                    showFieldError(field, 'El nombre debe tener al menos 2 caracteres');
                    return false;
                }
                break;
                
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    showFieldError(field, 'Ingresa un email válido');
                    return false;
                }
                break;
                
            case 'subject':
                if (value.length < 5) {
                    showFieldError(field, 'El asunto debe tener al menos 5 caracteres');
                    return false;
                }
                break;
                
            case 'message':
                if (value.length < 10) {
                    showFieldError(field, 'El mensaje debe tener al menos 10 caracteres');
                    return false;
                }
                break;
        }
        
        return true;
    }
    
    function validateForm() {
        const inputs = contactForm.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    function showFieldError(field, message) {
        field.style.borderColor = 'var(--color-dark)';
        
        // Crear mensaje de error
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.color = 'var(--color-dark)';
        errorDiv.style.fontSize = '0.9rem';
        errorDiv.style.marginTop = '0.5rem';
        
        field.parentNode.appendChild(errorDiv);
    }
    
    function clearFieldError(field) {
        field.style.borderColor = 'var(--color-accent)';
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }
    
    function showSuccessMessage() {
        // Crear mensaje de éxito
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>¡Mensaje enviado exitosamente! Te contactaré pronto.</span>
        `;
        successDiv.style.cssText = `
            background: var(--color-primary);
            color: var(--color-light);
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        `;
        
        contactForm.appendChild(successDiv);
        
        // Remover mensaje después de 5 segundos
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }
    
    // ========================================
    // MEJORAS DE ACCESIBILIDAD
    // ========================================
    
    // Navegación con teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Cerrar modales o menús si están abiertos
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (modal.style.display === 'block') {
                    modal.style.display = 'none';
                }
            });
        }
    });
    
    // Focus visible para mejor accesibilidad
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--color-primary)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});
