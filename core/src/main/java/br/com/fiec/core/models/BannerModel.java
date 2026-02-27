package br.com.fiec.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

@Model(adaptables = SlingHttpServletRequest.class, adapters = {
        ComponentExporter.class }, resourceType = BannerModel.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class BannerModel implements ComponentExporter {

    static final String RESOURCE_TYPE = "fiec-aem/components/banner-component";

@ValueMapValue private String title;
    @ValueMapValue private String subtitle;
    @ValueMapValue private String bgImage;
    @ValueMapValue private String ctaLink;
    @ValueMapValue private String ctaLabel;
    @ValueMapValue private String align;

    public String getTitle() { return title; }
    public String getSubtitle() { return subtitle; }
    public String getBgImage() { return bgImage; }
    public String getCtaLink() { return ctaLink; }
    public String getCtaLabel() { return ctaLabel; }
    public String getAlign() { return align != null ? align : "center"; }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}