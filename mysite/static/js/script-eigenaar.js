//! NAVBAR ACHTERGRONDKLEUR NA SCROLLEN
$(document).ready(function () {
	$(window).scroll(function () {
		// check: is er gescrolled
		if ($(document).scrollTop() > 300) {
			// check: is er meer dan 300px van top browser window gescrolled is
			$('.navbar-fixed-top').css('background-color', '#ee7c05'); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
		} else {
			$('.navbar-fixed-top').css('background-color', 'transparent'); // if not, change it back to transparent
		}
	});
});

//! EIGENAAR PAGINA CONTENT WISSEL
const aanDeSlag = document.getElementById('aan-de-slag');
const financieel = document.getElementById('financieel');
const eigenaarContent = document.querySelector('.content-links');

aanDeSlag.addEventListener('click', () => {
  financieel.classList.remove('active');
  aanDeSlag.classList.add('active');

	eigenaarContent.innerHTML =
		'<h1>Aan de slag</h1><p><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rerum ut velit veniam expedita! Repellendus aut aliquid explicabo? Pariatur velit magnam ea eligendi fugit est eaque suscipit ratione totam corporis, tenetur aperiam aspernatur omnis quisquam et dolor temporibus.</strong></p><p>Itaque ab assumenda commodi odit dolores quaerat laboriosam corrupti. Beatae quaerat nemo vitae explicabo voluptatum excepturi maiores quo nihil cum unde? Aliquid alias ipsam sint modi fuga ipsum, laboriosam quo quaerat. Natus, possimus mollitia saepe hic odio, illo dicta repudiandae expedita harum quae, adipisci porro! Natus ullam suscipit corrupti officiis magni animi, perspiciatis qui nihil delectus.</p>';
});

financieel.addEventListener('click', () => {
  aanDeSlag.classList.remove('active');
  financieel.classList.add('active');

	eigenaarContent.innerHTML =
		'<h1>Financieel</h1><p><strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum necessitatibus nemo voluptatem. Iusto consectetur, quis sit ut magnam nihil ipsa dignissimos quam molestiae veniam sequi.</strong></p><p>Harum illo, obcaecati qui corporis quae aut. Odio, dignissimos quod. Sequi aliquid eos, harum fugit esse voluptate architecto, dolorum consequatur tenetur doloremque quisquam neque labore facilis illo sed minus repudiandae, facere distinctio cum corporis nobis? Consequatur mollitia blanditiis nostrum ut totam recusandae maiores cupiditate sed corporis! Amet provident dignissimos aliquid, aliquam vitae, inventore quod tempore earum quas quis corporis ipsam magni aspernatur rem velit, fugit aperiam qui praesentium quasi.</p>';
});
