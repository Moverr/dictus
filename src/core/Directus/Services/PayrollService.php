<?php

use Directus\Application\Container;
use Directus\Database\Schema\SchemaManager;
use Directus\Services\AbstractService;

class PayrollService extends AbstractService{

    protected $collection;
    protected $PayrollService;

    public function __construct(Container $container ){
      parent::__construct($container);
      $this->collection = SchemaManager::COLLECTION_USERS;

    //   defining a singleton 
      $this->PayrollService = new PayrollService($this->container);

    }


}
