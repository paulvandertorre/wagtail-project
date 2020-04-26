"""gebruiker pagina"""

from django.db import models

from wagtail.admin.edit_handlers import FieldPanel
from wagtail.core.models import Page

# Create your models here.


class Gebruiker(Page):
    """gebruiker pagina class"""

    template = "gebruiker/gebruiker.html"

    # content = StreamField()

    subtitle = models.CharField(max_length=100, null=True, blank=True)

    content_panels = Page.content_panels + [
        FieldPanel("subtitle"),
    ]

    class Meta:
        verbose_name = "Gebruiker"
        verbose_name_plural = "Gebruiker"
