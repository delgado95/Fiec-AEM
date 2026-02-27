package br.com.fiec.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

@Model(adaptables = SlingHttpServletRequest.class, adapters = {
        ComponentExporter.class }, resourceType = CardModel.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class CardModel implements ComponentExporter {

    static final String RESOURCE_TYPE = "fiec-aem/components/card-component";

@ValueMapValue
    private String title;

    @ValueMapValue
    private String description;

    @ValueMapValue
    private String imagePath;

    @ValueMapValue
    private String linkTo;

    public String getTitle() { 
        return title; 
    }

    public String getDescription() { 
        return description; 
    }

    public String getImagePath() { 
        return imagePath; 
    }

    public String getLinkTo() { 
        return linkTo; 
    }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}