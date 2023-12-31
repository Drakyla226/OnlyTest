<?php

if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
{
	die();
}

use Bitrix\Currency\UserField\Types\MoneyType;

/**
 * @var $arResult array
 */
$value = $arResult['value'];

$text = '';
$first = true;

foreach($value as $res)
{
	if(!$first)
	{
		$text .= ', ';
	}

	$first = false;

	$explode = MoneyType::unformatFromDB($res);
	$currentValue = ($explode[0] <> '' ? (float)$explode[0] : '');
	$currentCurrency = ($explode[1] ?? '');

	$format = \CCurrencyLang::GetFormatDescription($currentCurrency);

	$currentValue = number_format(
		(float)$currentValue,
		$format['DECIMALS'],
		$format['DEC_POINT'],
		$format['THOUSANDS_SEP']
	);

	$currentValue = \CCurrencyLang::applyTemplate($currentValue, $format['FORMAT_STRING']);
	$renderContext = ($arParams['additionalParameters']['renderContext'] ?? null);
	if ($renderContext === 'export')
	{
		$currentValue = html_entity_decode($currentValue, ENT_NOQUOTES, LANG_CHARSET);
	}

	$text .= $currentValue;
}

$arResult['value'] = $text;
