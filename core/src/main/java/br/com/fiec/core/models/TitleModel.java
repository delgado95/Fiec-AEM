package br.com.fiec.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

@Model(adaptables = SlingHttpServletRequest.class, adapters = {
        ComponentExporter.class }, resourceType = TitleModel.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class TitleModel implements ComponentExporter {

    static final String RESOURCE_TYPE = "fiec-aem/components/title-component";

    @ValueMapValue
    private String title;

    @ValueMapValue
    private String type;

    public String getTitle() {
        return title;
    }

    public String getType() {
        return type;
    }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}