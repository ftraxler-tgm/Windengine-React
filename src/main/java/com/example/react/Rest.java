package com.example.react;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Fabian Traxler {@literal <ftraxler@student.tgm.ac.at>}
 * @version 2019-05-29
 * @project syt4-gk835-componentbase-ui-ftraxler-tgm
 */
@RestController
public class Rest {

    @Autowired
    WindengineRepository repository;

    @RequestMapping(method= RequestMethod.GET, value="/api/zentrale")
    public Iterable<Windengine> wind(){
        return repository.findAll();
    }
}
