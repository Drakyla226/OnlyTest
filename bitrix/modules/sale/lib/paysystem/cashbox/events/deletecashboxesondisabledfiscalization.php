<?php

namespace Bitrix\Sale\PaySystem\Cashbox\Events;

use Bitrix\Sale;

class DeleteCashboxesOnDisabledFiscalization implements IExecuteEvent
{
	/** @var Sale\PaySystem\Service $service */
	private $service;
	/** @var string $kkmId */
	private $kkmId;

	public function __construct(Sale\PaySystem\Service $service, string $kkmId)
	{
		$this->service = $service;
		$this->kkmId = $kkmId;
	}

	/**
	 * @return Sale\Result
	 * @throws \Bitrix\Main\ArgumentException
	 * @throws \Bitrix\Main\NotSupportedException
	 * @throws \Bitrix\Main\ObjectPropertyException
	 * @throws \Bitrix\Main\SystemException
	 */
	public function executeEvent(): Sale\Result
	{
		$result = new Sale\Result();

		if (!$this->service || !$this->service->isSupportPrintCheck())
		{
			return $result;
		}

		$cashboxList = Sale\Cashbox\Manager::getList([
			'select' => ['ID', 'KKM_ID'],
			'filter' => [
				'=HANDLER' => $this->service->getCashboxClass(),
				'=KKM_ID' => $this->kkmId,
			],
		]);
		foreach ($cashboxList as $cashboxItem)
		{
			$cashboxId = $cashboxItem['ID'];
			$serviceCashbox = Sale\Cashbox\Manager::getObjectById($cashboxId);
			if (Sale\Cashbox\Manager::isCashboxChecksExist($cashboxId))
			{
				Sale\Cashbox\Manager::deactivateCashbox($cashboxId);
			}
			else
			{
				$deleteResult = Sale\Cashbox\Manager::delete($cashboxId);
				if ($deleteResult->isSuccess())
				{
					AddEventToStatFile('sale', 'deleteCashbox', '', $serviceCashbox::getCode());
				}
				else
				{
					$result->addErrors($deleteResult->getErrors());
				}
			}
		}

		return $result;
	}
}