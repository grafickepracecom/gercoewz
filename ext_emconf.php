<?php

/**
 * Extension Manager/Repository config file for ext "gercotemplate".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'GercoTemplate',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'bootstrap_package' => '10.0.0-11.0.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Grafickepracecom\\Gercotemplate\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'grafickeprace.com',
    'author_email' => 'webmaster@grafickeprace.com',
    'author_company' => 'grafickeprace.com',
    'version' => '1.0.2',
];
