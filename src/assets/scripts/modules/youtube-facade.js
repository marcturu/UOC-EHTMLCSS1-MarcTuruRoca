export function initYoutubeFacades() {
  document.querySelectorAll('.youtube-facade').forEach(facade => {
    facade.addEventListener('click', () => {
      const id = facade.dataset.videoid;
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
      iframe.width = '560';
      iframe.height = '315';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      facade.replaceWith(iframe);
    });
  });
}