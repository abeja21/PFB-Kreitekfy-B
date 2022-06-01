package com.kreitekB.Api.infrastructure.rest;

import com.kreitekB.Api.application.dto.StyleDTO;
import com.kreitekB.Api.application.service.StyleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class StyleRestController {

    private final StyleService styleService;

    @Autowired
    public StyleRestController(StyleService styleService) {
        this.styleService = styleService;
    }

    @CrossOrigin
    @PostMapping(value = "/styles", produces = "application/json", consumes = "application/json")
    ResponseEntity<StyleDTO> insertStyle(@RequestBody StyleDTO styleDTO) {
        StyleDTO styleSaved = this.styleService.saveStyle(styleDTO);
        return new ResponseEntity<>(styleSaved, HttpStatus.CREATED);
    }
    @CrossOrigin
    @GetMapping(value = "/styles", produces = "application/json")
    ResponseEntity<List<StyleDTO>> getAllStyles(@RequestParam(name = "partialName", required = false) String partialName) {
        List<StyleDTO> styles;

        if (partialName == null) {
            styles = this.styleService.getAllStyles();
        } else {
            styles = this.styleService.getStylesByName(partialName);
        }
        return new ResponseEntity<>(styles, HttpStatus.OK);
    }
    @CrossOrigin
    @GetMapping(value = "/styles/{styleId}")
    ResponseEntity<StyleDTO> getStyleById(@PathVariable Long styleId) {
        Optional<StyleDTO> style = this.styleService.getStyleById(styleId);

        if (style.isPresent()) {
            return new ResponseEntity<>(style.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin
    @DeleteMapping(value = "/styles/{styleId}")
    ResponseEntity<?> deleteStyleById(@PathVariable Long styleId) {
        this.styleService.deleteStyle(styleId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(value = "/styles_filter", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Page<StyleDTO>> getStylesByCriteriaPaged(@RequestParam(value = "filter", required = false) String filter, Pageable pageable) {

        Page<StyleDTO> styles = this.styleService.getStylesByCriteriaStringPaged(pageable, filter);
        return new ResponseEntity<Page<StyleDTO>>(styles, HttpStatus.OK);
    }
}
