<?php

namespace Directus\Api\Routes;


use Directus\Application\Application;
use Directus\Application\Http\Request;
use Directus\Application\Http\Response;
use Directus\Application\Route;



class Payroll extends Route
{
   public function __invoke(Application $app){
    $app->get('', [$this, 'all']);
    
   }


     /**
     * @param Request $request
     * @param Response $response
     *
     * @return Response
     */
    
   public function all(Request $request, Response $response)
   {
      $responseData['data'] = [
         "Trust"=>"Gamer"

     ];

     return $this->responseWithData($request, $response, $responseData);
   }



}



 