<?php

namespace App\Notifications;


class WhatsappMessage
{
    /**
     * @var string
     */
    private $_number;

    /**
     * @var string
     */
    private $_message;

    /**
     * @return string
     */
    public function getNumber(): string
    {
        return $this->_number;
    }

    /**
     * @param string $number
     * @return $this
     */
    public function setNumber(string $number): WhatsappMessage
    {
        $this->_number = $number;
        return $this;
    }

    /**
     * @return string
     */
    public function getMessage(): string
    {
        return $this->_message;
    }

    /**
     * @param string $message
     * @return $this
     */
    public function setMessage(string $message): WhatsappMessage
    {
        $this->_message = $message;
        return $this;
    }

}
