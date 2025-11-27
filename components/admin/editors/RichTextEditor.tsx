'use client'

import { useState, useRef, useCallback } from 'react'
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link as LinkIcon,
  Heading1,
  Heading2,
  Heading3,
  Quote,
  Undo,
  Redo,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from 'lucide-react'
import { cn } from '@/lib/utils/cn'

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export function RichTextEditor({
  value,
  onChange,
  placeholder = 'Start writing...',
  className,
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  const execCommand = useCallback((command: string, value?: string) => {
    document.execCommand(command, false, value)
    editorRef.current?.focus()
    // Trigger onChange with new content
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }, [onChange])

  const handleInput = useCallback(() => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }, [onChange])

  const handlePaste = useCallback((e: React.ClipboardEvent) => {
    e.preventDefault()
    const text = e.clipboardData.getData('text/plain')
    document.execCommand('insertText', false, text)
  }, [])

  const insertLink = useCallback(() => {
    const url = prompt('Enter URL:')
    if (url) {
      execCommand('createLink', url)
    }
  }, [execCommand])

  const ToolbarButton = ({
    onClick,
    title,
    children,
    active = false,
  }: {
    onClick: () => void
    title: string
    children: React.ReactNode
    active?: boolean
  }) => (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={cn(
        'p-2 rounded hover:bg-bg-alt transition-colors',
        active && 'bg-bg-alt text-text-primary'
      )}
    >
      {children}
    </button>
  )

  return (
    <div className={cn('border border-border rounded-lg overflow-hidden', className)}>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-border bg-bg-alt">
        <div className="flex items-center gap-1 pr-2 border-r border-border">
          <ToolbarButton onClick={() => execCommand('undo')} title="Undo">
            <Undo className="w-4 h-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCommand('redo')} title="Redo">
            <Redo className="w-4 h-4" />
          </ToolbarButton>
        </div>

        <div className="flex items-center gap-1 pr-2 border-r border-border">
          <ToolbarButton onClick={() => execCommand('formatBlock', 'h1')} title="Heading 1">
            <Heading1 className="w-4 h-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCommand('formatBlock', 'h2')} title="Heading 2">
            <Heading2 className="w-4 h-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCommand('formatBlock', 'h3')} title="Heading 3">
            <Heading3 className="w-4 h-4" />
          </ToolbarButton>
        </div>

        <div className="flex items-center gap-1 pr-2 border-r border-border">
          <ToolbarButton onClick={() => execCommand('bold')} title="Bold">
            <Bold className="w-4 h-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCommand('italic')} title="Italic">
            <Italic className="w-4 h-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCommand('underline')} title="Underline">
            <Underline className="w-4 h-4" />
          </ToolbarButton>
        </div>

        <div className="flex items-center gap-1 pr-2 border-r border-border">
          <ToolbarButton onClick={() => execCommand('insertUnorderedList')} title="Bullet List">
            <List className="w-4 h-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCommand('insertOrderedList')} title="Numbered List">
            <ListOrdered className="w-4 h-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCommand('formatBlock', 'blockquote')} title="Quote">
            <Quote className="w-4 h-4" />
          </ToolbarButton>
        </div>

        <div className="flex items-center gap-1 pr-2 border-r border-border">
          <ToolbarButton onClick={() => execCommand('justifyLeft')} title="Align Left">
            <AlignLeft className="w-4 h-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCommand('justifyCenter')} title="Align Center">
            <AlignCenter className="w-4 h-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCommand('justifyRight')} title="Align Right">
            <AlignRight className="w-4 h-4" />
          </ToolbarButton>
        </div>

        <div className="flex items-center gap-1">
          <ToolbarButton onClick={insertLink} title="Insert Link">
            <LinkIcon className="w-4 h-4" />
          </ToolbarButton>
        </div>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onPaste={handlePaste}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        dangerouslySetInnerHTML={{ __html: value }}
        className={cn(
          'min-h-[300px] p-4 focus:outline-none prose prose-sm max-w-none',
          'prose-headings:font-display prose-headings:font-semibold',
          'prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg',
          'prose-p:text-text-secondary prose-p:leading-relaxed',
          'prose-a:text-loop-service prose-a:no-underline hover:prose-a:underline',
          'prose-strong:text-text-primary prose-strong:font-semibold',
          'prose-blockquote:border-l-4 prose-blockquote:border-loop-service prose-blockquote:pl-4 prose-blockquote:italic',
          !value && !isFocused && 'text-text-muted'
        )}
        data-placeholder={placeholder}
        suppressContentEditableWarning
      />

      <style jsx>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #9ca3af;
          pointer-events: none;
        }
      `}</style>
    </div>
  )
}
