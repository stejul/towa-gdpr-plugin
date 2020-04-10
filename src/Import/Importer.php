<?php

namespace Towa\GdprPlugin\Import;

use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\Request;
use Towa\GdprPlugin\Export\PluginSettings;

// phpcs:disable PSR1.Files.SideEffects
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}
// phpcs:enable

class Importer
{
    private const TOWA_GDPR_IMPORTFILENAME = 'towa_gdpr_settings_file';

    /**
     * Run Import
     */
    public function runImport(): void
    {
        if (! current_user_can('manager_options')) {
            throw new \Exception('Settings can only be imported by user with manage_options permissions');
        }
        $importFile = $this->getImportFileFromRequest();
        $settings = $this->deSerializeFile($importFile);
        $pluginSettings = new PluginSettings($settings);
        $pluginSettings->saveSettings();
    }

    /**
     * Get import File from current Request.
     *
     * @return File
     */
    private function getImportFileFromRequest(): File
    {
        $request = Request::createFromGlobals();
        if (! $request->files->has(self::TOWA_GDPR_IMPORTFILENAME)) {
            wp_die(__('Please upload a file to import', 'towa-gdpr-plugin'));
        }
        $file = $request->files->get(self::TOWA_GDPR_IMPORTFILENAME);
        $type = $file->getMimeType();
        if ($type !== 'application/json' && $type !== 'text/plain') {
            wp_die(__('Please upload a valid .json file', 'towa-gdpr-plugin'));
        }

        return $file;
    }

    /**
     * Deserialize Settings from File
     *
     * @param File $file
     * @return mixed
     */
    private function deSerializeFile(File $file)
    {
        return json_decode(file_get_contents($file->getPathname()), true);
    }
}
