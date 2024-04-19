<?php
namespace Directus\Services;

use Directus\Application\Container;
use Directus\Database\Schema\SchemaManager;
use Directus\Services\AbstractService;

class PayrollService extends AbstractService
{

  protected $collection;
  protected $PayrollService;

  protected $tableGateway;



  public function __construct(Container $container)
  {
   parent::__construct($container);
   $this->collection = SchemaManager::COLLECTION_PAYROLL;
 
     
  }


  public function findAll(array $params = [])
  {
   return $this->getItemsAndSetResponseCacheTags($this->getTableGateway(), $params);
 
  }


  public function getTableGateway()
  {
    if (!$this->tableGateway) {
      $this->tableGateway = $this->createTableGateway($this->collection);
    }

    return $this->tableGateway;
  }
}
