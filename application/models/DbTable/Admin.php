<?php

class Application_Model_DbTable_Admin extends Zend_Db_Table_Abstract
{

    protected $_name = 'admins';
    protected $_primary = 'id';
    
    public function get_name(){
	return $this->_name;
    }

    public function get_primary(){
	return $this->_primary;
	
    }




}